import config from '@/config';
import type { ALL_CATEGORY_TYPE } from '@/utils/content';
import { Fragment, useEffect, useState, type FC } from 'react';
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

interface Props {
  category: ALL_CATEGORY_TYPE[];
}

const Search: FC<Props> = ({ category }) => {
  const [open, setOpen] = useState(false);
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

  return (
    <div className='mr-4 hidden items-center lg:flex'>
      <Button
        onClick={() => setOpen((open) => !open)}
        size='sm'
        className='h-[32px] bg-muted/50 px-2 py-0 text-sm text-muted-foreground shadow-none hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
      >
        Search
        <kbd className='pointer-events-none ml-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>

      {config.search && (
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {category.map((item, index) => (
              <Fragment key={index}>
                <CommandGroup heading={item.label}>
                  {item.children.map((child, cIndex) => (
                    <CommandItem
                      onSelect={() => {
                        window.open(`${location.origin}/posts/${child.id}`, '_blank');
                      }}
                      key={cIndex}
                      className='cursor-pointer'
                    >
                      <span>{child.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index === category.length - 1 && <CommandSeparator />}
              </Fragment>
            ))}
          </CommandList>
        </CommandDialog>
      )}
    </div>
  );
};

export default Search;
