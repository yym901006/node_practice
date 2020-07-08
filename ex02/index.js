module.exports.compose = (middlewares) => {
  return function () {
    return dispatch(0);
    function dispatch(i) {
      // ##BEGIN## 代码已加密
      const fun = middlewares[i];
      if (!fun) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fun(function next() {
          dispatch(i + 1);
        })
      );
      // ##END##
    }
  };
};
