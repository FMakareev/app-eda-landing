const dotenv = require('dotenv')
const {parsed} = dotenv.config()

console.log('parsed: ', parsed);

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: parsed.USER,
  // Password optional, prompted if none given
  password: parsed.PASSWORD,
  host: parsed.HOST,
  port: parsed.PORT,
  localRoot: __dirname + "/public",
  remoteRoot: "/",
  include: ["**/*", "*"],
  exclude: [
    "static/",
    "src/",
    ".cache/",
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("Deploy success:", res))
  .catch((err) => console.log('Deploy not success: ', err));

ftpDeploy.on("uploading", function (data) {
  console.log(data.totalFilesCount); // total file count being transferred
});
ftpDeploy.on("uploaded", function (data) {
  console.log("uploaded",data); // same data as uploading event
});
ftpDeploy.on("log", function (data) {
  console.log("log",data); // same data as uploading event
});
ftpDeploy.on("upload-error", function (data) {
  console.log("upload-error",data.err); // data will also include filename, relativePath, and other goodies
});
