export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['upd', 'feat', 'fix', 'docs', 'revert']],
    'type-case': [0],
    'subject-full-stop': [0, 'never'],
    // 'scope-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};
