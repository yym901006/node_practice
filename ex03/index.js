const fs = require("fs");
module.exports.parser = (path) => {
  const readStream = fs.createReadStream(path);
  let reqData = [];
  let size = 0;
  return new Promise((resolve) => {
    // ##BEGIN## 代码已加密
    readStream.on("data", (chunk) => {
      reqData.push(chunk);
      size += chunk.length;
    });
    readStream.on("end", () => {
      const data = Buffer.concat(reqData, size);
      resolve(JSON.parse(data.toString()));
    });
    // ##END##
  });
};
