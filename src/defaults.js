function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
}

const exportedValue = {
  defaults: getDefaults(),
  getDefaults,
  changeDefaults
};

function changeDefaults(newDefaults) {
  exportedValue.defaults = newDefaults;
}

export default exportedValue;
