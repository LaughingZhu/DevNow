import config from '@/config';
import { categories } from '@/data/category';
import { debounce } from 'lodash-es';
import lunr from 'lunr';
import { Fragment, useCallback, useEffect, useRef, useState, type FC } from 'react';
import { Button } from './shadcn/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from './shadcn/command';

interface SEARCH_TYPE {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

const Search: FC = () => {
  const [open, setOpen] = useState(false);
  const [LunrIdx, setLunrIdx] = useState<null | lunr.Index>(null);
  const [LunrDocs, setLunrDocs] = useState<SEARCH_TYPE[]>([]);
  const initializedRef = useRef(false);
  const [content, setContent] = useState<
    | {
        label: string;
        id: string;
        children: {
          label: string;
          id: string;
        }[];
      }[]
    | null
  >(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // 仅在挂载时执行一次，并行加载搜索索引和文档数据
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const _initSearch = async () => {
      try {
        const [indexData, docsData] = await Promise.all([
          fetch('/search-index.json').then((r) => r.json()),
          fetch('/search-docs.json').then((r) => r.json())
        ]);
        setLunrIdx(lunr.Index.load(indexData));
        setLunrDocs(docsData);
      } catch (err) {
        console.error('[Search] Failed to initialize search index:', err);
      }
    };
    _initSearch();
  }, []);

  const onInputChange = useCallback(
    debounce(async (search: string) => {
      if (!LunrIdx || !LunrDocs.length) return;
      const searchResult = LunrIdx.search(search);
      const map = new Map<
        string,
        { label: string; id: string; children: { label: string; id: string }[] }
      >();

      if (searchResult.length > 0) {
        for (let i = 0; i < searchResult.length; i++) {
          const slug = searchResult[i]['ref'];

          const doc = LunrDocs.find((doc) => doc.slug === slug);
          if (!doc) continue;

          const category = categories.find((item) => item.slug === doc.category);
          if (!category) continue;

          if (!map.has(category.slug)) {
            map.set(category.slug, {
              label: category.title || 'DevNow',
              id: category.slug || 'DevNow',
              children: []
            });
          }
          const target = map.get(category.slug);
          if (!target) continue;
          target.children.push({
            label: doc.title,
            id: doc.slug
          });
        }
      }
      setContent([...map.values()].sort((a, b) => a.label.localeCompare(b.label)));
    }, 200),

    [LunrIdx, LunrDocs]
  );

  useEffect(() => {
    if (!content && !!LunrDocs.length && LunrIdx) {
      onInputChange('');
    }
  }, [onInputChange, content]);

  return (
    <div className='mr-4 hidden items-center lg:flex'>
      <Button
        onClick={() => setOpen((open) => !open)}
        size='sm'
        className='h-[32px] bg-muted/50 px-2 py-0 text-sm text-muted-foreground shadow-none hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
      >
        Search
        <kbd className='font-mono pointer-events-none ml-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>

      {config.search && (
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput onValueChange={onInputChange} placeholder='Type a command or search...' />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {content?.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <CommandGroup heading={item.label}>
                    {item.children.map((child) => (
                      <CommandItem
                        onSelect={() => {
                          window.open(`${location.origin}/posts/${child.id}`, '_blank');
                        }}
                        key={child.id}
                        className='cursor-pointer'
                      >
                        <span>{child.label}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  {index < content.length - 1 && <CommandSeparator />}
                </Fragment>
              );
            })}
          </CommandList>
        </CommandDialog>
      )}
    </div>
  );
};

export default Search;
