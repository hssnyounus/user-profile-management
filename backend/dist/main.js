/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./database/models sync recursive ^\\.\\/(?%21index\\.js).*\\.js$":
/*!***********************************************************!*\
  !*** ./database/models/ sync ^\.\/(?%21index\.js).*\.js$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./profile.js\": \"./database/models/profile.js\",\n\t\"./user.js\": \"./database/models/user.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./database/models sync recursive ^\\\\.\\\\/(?%21index\\\\.js).*\\\\.js$\";\n\n//# sourceURL=webpack://reactproject/./database/models/_sync_^\\.\\/(?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/routes */ \"./src/routes/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n;\n\n\n\n\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\ndotenv.config();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // parse application/x-www-form-urlencoded\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: false\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()({\n  credentials: true,\n  origin: 'http://localhost:3000'\n}));\napp.set('trust proxy', 1); // trust first proxy\n// app.use('/static', express.static('public'));\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_6___default()('combined'));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_3___default()({\n  secret: 'keyboardcat',\n  resave: false,\n  saveUninitialized: true,\n  cookie: {\n    secure: false,\n    httpOnly: false,\n    maxAge: 1000 * 60 * 30\n  }\n})); // parse application/json\n\n(0,_src_routes__WEBPACK_IMPORTED_MODULE_1__.default)(app);\nconst port = process.env.API_PORT;\napp.listen(port, () => {\n  console.log(`server is ready ${port}`);\n});\n\n//# sourceURL=webpack://reactproject/./app.js?");

/***/ }),

/***/ "./database/config.js":
/*!****************************!*\
  !*** ./database/config.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\ndotenv.config();\nmodule.exports = {\n  development: {\n    username: process.env.DB_USERNAME,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    host: process.env.DB_HOST,\n    dialect: 'mysql'\n  },\n  test: {\n    username: process.env.CI_DB_USERNAME,\n    password: process.env.CI_DB_PASSWORD,\n    database: process.env.CI_DB_NAME,\n    host: process.env.DB_HOST,\n    dialect: 'mysql'\n  },\n  production: {\n    username: process.env.PROD_DB_USERNAME,\n    password: process.env.PROD_DB_PASSWORD,\n    database: process.env.PROD_DB_NAME,\n    host: process.env.PROD_DB_HOSTNAME,\n    dialect: 'mysql'\n  }\n};\n\n//# sourceURL=webpack://reactproject/./database/config.js?");

/***/ }),

/***/ "./database/models/index.js":
/*!**********************************!*\
  !*** ./database/models/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./database/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst basename = path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename);\nconst env = \"development\" || 0;\nconst config = (_config__WEBPACK_IMPORTED_MODULE_3___default())[env];\nconst db = {};\nlet sequelize;\n\nif (config.use_env_variable) {\n  sequelize = new (sequelize__WEBPACK_IMPORTED_MODULE_2___default())(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new (sequelize__WEBPACK_IMPORTED_MODULE_2___default())(config.database, config.username, config.password, config);\n}\n\nfs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(__dirname).filter(file => {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(file => {\n  const model = sequelize['import'](path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, file));\n  db[model.name] = model;\n});\n\nconst context = __webpack_require__(\"./database/models sync recursive ^\\\\.\\\\/(?%21index\\\\.js).*\\\\.js$\");\n\ncontext.keys().map(context).forEach(module => {\n  const sequelizeModel = module(sequelize, (sequelize__WEBPACK_IMPORTED_MODULE_2___default()));\n  db[sequelizeModel.name] = sequelizeModel;\n});\nObject.keys(db).forEach(modelName => {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\ndb.sequelize = sequelize;\ndb.Sequelize = (sequelize__WEBPACK_IMPORTED_MODULE_2___default());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db); // module.exports = db;\n\n//# sourceURL=webpack://reactproject/./database/models/index.js?");

/***/ }),

/***/ "./database/models/profile.js":
/*!************************************!*\
  !*** ./database/models/profile.js ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = (sequelize, DataTypes) => {\n  const Profile = sequelize.define('Profile', {\n    profileiamage: DataTypes.STRING,\n    userId: DataTypes.INTEGER\n  }, {});\n\n  Profile.associate = function (models) {\n    // associations can be defined here\n    Profile.belongsTo(models.User, {\n      as: 'users',\n      foreignKey: 'userId'\n    });\n  };\n\n  return Profile;\n};\n\n//# sourceURL=webpack://reactproject/./database/models/profile.js?");

/***/ }),

/***/ "./database/models/user.js":
/*!*********************************!*\
  !*** ./database/models/user.js ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = (sequelize, DataTypes) => {\n  const User = sequelize.define('User', {\n    firstname: DataTypes.STRING,\n    lastname: DataTypes.STRING,\n    email: DataTypes.STRING,\n    password: DataTypes.STRING,\n    dateofbirth: DataTypes.STRING\n  }, {});\n\n  User.associate = function (models) {\n    // associations can be defined here\n    User.hasOne(models.Profile, {\n      foreignKey: \"userId\",\n      as: \"profiles\"\n    });\n  };\n\n  return User;\n};\n\n//# sourceURL=webpack://reactproject/./database/models/user.js?");

/***/ }),

/***/ "./middleware/authMiddleware.js":
/*!**************************************!*\
  !*** ./middleware/authMiddleware.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _database_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/models */ \"./database/models/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  User\n} = _database_models__WEBPACK_IMPORTED_MODULE_0__.default;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res, next) => {\n  const {\n    firstname,\n    lastname,\n    email,\n    password,\n    confirmpassword,\n    dateofbirth\n  } = req.body;\n\n  if (!firstname) {\n    return res.status(400).send('FristName is required');\n  }\n\n  if (!lastname) {\n    return res.status(400).send('LastName is required');\n  }\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email)) {\n    return res.status(400).send('Email is required');\n  }\n\n  if (!dateofbirth) {\n    return res.status(400).send('Date of birth i required');\n  }\n\n  if (!password) {\n    return res.status(400).send('Password is required');\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_1___default().isLength(password, {\n    max: 3\n  })) {\n    return res.status(400).send('Password at least 6 character');\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_1___default().isLength(password, {\n    min: 15\n  })) {\n    return res.status(400).send('Password should be maximum 15 characters');\n  }\n\n  if (!confirmpassword) {\n    return res.status(400).send('ConfirmPassword is required');\n  }\n\n  if (password !== confirmpassword) {\n    return res.status(400).send('Password and ConfirmPassword does not match');\n  }\n\n  const user = await User.findOne({\n    where: {\n      email\n    }\n  });\n\n  if (user) {\n    return res.status(409).send(\"User email already exists\");\n  }\n\n  next();\n});\n\n//# sourceURL=webpack://reactproject/./middleware/authMiddleware.js?");

/***/ }),

/***/ "./middleware/authorized.js":
/*!**********************************!*\
  !*** ./middleware/authorized.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/models */ \"./database/models/index.js\");\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\n\nconst {\n  User\n} = _database_models__WEBPACK_IMPORTED_MODULE_2__.default;\nconsole.log(User);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res, next) => {\n  if (!req.headers.authorization) {\n    return res.status(401).send({\n      error: 'Unauthorized'\n    });\n  }\n\n  const token = req.headers.authorization.split(\" \")[1];\n  console.log(token, 'tokensss');\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, {\n    expiresIn: '24h'\n  }, (error, decoded) => {\n    if (error) {\n      return res.status(401).send({\n        error\n      });\n    }\n\n    req.decoded = decoded;\n    console.log(req.decoded);\n    return _database_models__WEBPACK_IMPORTED_MODULE_2__.default.User.findByPk(decoded.userId).then(user => {\n      if (!user) {\n        return res.status(401).send({\n          error: 'User does not exist'\n        });\n      }\n\n      return next();\n    });\n  });\n});\n\n//# sourceURL=webpack://reactproject/./middleware/authorized.js?");

/***/ }),

/***/ "./middleware/fileMiddleware.js":
/*!**************************************!*\
  !*** ./middleware/fileMiddleware.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n\nvar storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n  destination: function (req, file, cb) {\n    cb(null, 'public');\n  },\n  filename: function (req, file, cb) {\n    cb(null, file.fieldname + file.originalname);\n    console.log(file.originalname, 'aaa');\n  }\n});\n\nlet fileFilter = function (req, file, cb) {\n  var allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];\n\n  if (allowedMimes.includes(file.mimetype)) {\n    cb(null, true);\n  } else {\n    cb({\n      success: false,\n      message: 'Invalid file type. Only jpg, png image files are allowed.'\n    }, false);\n  }\n};\n\nvar upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  storage: storage,\n  fileFilter: fileFilter,\n  limits: {\n    fileSize: 200 * 1024 * 1024\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);\n\n//# sourceURL=webpack://reactproject/./middleware/fileMiddleware.js?");

/***/ }),

/***/ "./services/EmailServices.js":
/*!***********************************!*\
  !*** ./services/EmailServices.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendConfirmationEmail\": () => /* binding */ sendConfirmationEmail\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\n\nconst nodemailerSendgrid = __webpack_require__(/*! nodemailer-sendgrid */ \"nodemailer-sendgrid\");\n\nconst transport = nodemailer.createTransport({\n  // nodemailerSendgrid({\n  //     apiKey: process.env.SENDGRID_API_KEY\n  // })\n  host: \"smtp.ethereal.email\",\n  port: 587,\n  secure: false,\n  service: \"gmail\",\n  auth: {\n    user: 'adnanmalika918@gmail.com',\n    pass: \"as55as18as\" // user:process.env.EMAIL,\n    // pass:process.env.PASSWORD,\n\n  }\n}); // const transport = nodemailer.createTransport(\n//     nodemailerSendgrid({\n//         apiKey: process.env.SENDGRID_API_KEY\n//     })\n// );\n\nconst sendConfirmationEmail = async user => {\n  try {\n    const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n      id: user.id\n    }, process.env.JWT_SECRET);\n    const url = `http://localhost:3000/dashboard/${token}`;\n    const emailConfirmsend = await transport.sendMail({\n      from: 'adnanmalika918@gmail.com',\n      to: `${user.firstname},${user.email}`,\n      subject: `${user.firstname} ${user.lastname}`,\n      html: `<h1>Hello world!</h1> <a href=${url}>${url} </a>`\n    });\n\n    if (emailConfirmsend) {\n      console.log('send mail');\n    } else {\n      console.log('not mail');\n    }\n\n    return console.log({\n      emailConfirmsend,\n      message: 'send email'\n    });\n  } catch (error) {\n    return new Error(error);\n  } // .then(()=>{\n  //     console.log('email sending confirmation...');\n  // }).catch(()=>{\n  //     console.log('sending error');\n  // });\n\n}; // export const sendConfirmationEmail =async (user) => {\n//     const url = `http://localhost:3000/confirmation`\n//     console.log(`${user.password},${user.email}`,'aaaa');\n//      const   mailOption = { from: 'example918@gmail.com',\n//         to: `${user.name},${user.password}`,\n//         subject: 'hello world',\n//         html: `<h1>Hello world!</h1> <a href=${url}>${url}</a>`,}\n// transport.sendMail(mailOption,(err,data)=>{\n//     if(err){\n//         console.log('error occured',err, data);\n//     }else{\n//         return console.log('send mail');\n//     }\n// })\n// }\n\n//# sourceURL=webpack://reactproject/./services/EmailServices.js?");

/***/ }),

/***/ "./src/Http/controllers/ProfileController.js":
/*!***************************************************!*\
  !*** ./src/Http/controllers/ProfileController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _database_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/models */ \"./database/models/index.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n // const publics = require('../../../public')\n\nconst {\n  Profile\n} = _database_models__WEBPACK_IMPORTED_MODULE_0__.default;\nconst ProfileController = {\n  async create(req, res, next) {\n    try {\n      // return console.log(publics,'public path');\n      const imageUrl = \" http://localhost:3000/\"; // return console.log(req.file.filename,'deco');\n\n      const profileiamage = req.file.filename;\n      const userId = req.decoded.userId;\n      const userimg = await Profile.findOne({\n        where: {\n          userId\n        }\n      });\n\n      if (userimg) {\n        //file exists\n        return res.status(409).send({\n          error: 'allready file exists'\n        });\n      }\n\n      const userProfile = await Profile.create({\n        userId,\n        profileiamage\n      });\n      console.log(userProfile);\n      return res.status(201).send(userProfile);\n    } catch (error) {\n      return next(new Error(error));\n    }\n  },\n\n  async Profileupdate(req, res, next) {\n    try {\n      // return consobodule.log(publics,'public path');\n      // return console.log(req.body);\n      const userId = req.decoded.userId; // const userProfileEdit = await Profile.findOne({where:{id:req.params.id, userId}});\n\n      const userProfileEdit = await Profile.findOne({\n        where: {\n          userId\n        }\n      });\n      console.log(userProfileEdit, 'user edit'); //file exists\n      // return res.status(404).send('allready file exists');\n      // firstname: req.body.firstname || UserEdit.firstname,\n\n      const imageUrl = \" http://localhost:3000/\"; // return console.log(req.body,'deco');\n\n      const profileiamage = req.file.filename;\n      const userProfileUpdate = await Profile.update({\n        profileiamage: profileiamage || userProfileEdit.profileiamage\n      }, {\n        where: {\n          id: userProfileEdit.id\n        }\n      }, {\n        returning: true,\n        plain: true\n      });\n\n      if (userProfileUpdate) {\n        return res.status(201).send(userProfileUpdate);\n      }\n\n      if (userProfileUpdate) {\n        return res.status(201).send({\n          message: \"user Profile updated successfully\"\n        });\n      } // if(!userProfileUpdate){\n\n\n      return res.status(500).send({\n        message: \"something wrong\"\n      }); // }\n      // return  console.log(userProfileUpdate,'user profile');\n      // return res.status(200).send({userProfileUpdate,'User Profile Updated successfuly')\n      // return res.status(200).send({ userProfileUpdate, message: { success: \"userProfile created successfull\" } })\n    } catch (error) {\n      return next(new Error(error));\n    }\n  },\n\n  async userProfileBy(req, res, next) {\n    try {\n      const userId = req.decoded.userId;\n      console.log(userId, 'user');\n      const userProfile = await Profile.findAll({\n        where: {\n          userId: userId\n        }\n      }); // const userProfile = await Profile.findAll();\n      // if(userProfile){\n\n      return res.status(200).send({\n        userProfile,\n        message: 'allrecodr'\n      }); // return res.status(200).send({userProfile,message:'messgae succes'})\n      //   return res.status(200).send({ userProfile, message: { success: \"user Profile get successfull\" } })\n      // }\n\n      return res.status(404).send({\n        message: \"user Profile not available\"\n      });\n    } catch (error) {\n      return next(new Error(error));\n    }\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileController);\n\n//# sourceURL=webpack://reactproject/./src/Http/controllers/ProfileController.js?");

/***/ }),

/***/ "./src/Http/controllers/UserController.js":
/*!************************************************!*\
  !*** ./src/Http/controllers/UserController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _database_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/models */ \"./database/models/index.js\");\n/* harmony import */ var _services_EmailServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/EmailServices */ \"./services/EmailServices.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./utils/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst {\n  User\n} = _database_models__WEBPACK_IMPORTED_MODULE_0__.default;\nconst UserController = {\n  async create(req, res, next) {\n    try {\n      const {\n        firstname,\n        lastname,\n        email,\n        password,\n        dateofbirth\n      } = req.body;\n      const hash = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.hashPassword)(password);\n      const UserSignup = await User.create({\n        firstname,\n        lastname,\n        email,\n        password: hash,\n        dateofbirth\n      });\n      const {\n        id\n      } = UserSignup;\n      await (0,_services_EmailServices__WEBPACK_IMPORTED_MODULE_1__.sendConfirmationEmail)(UserSignup);\n      const token = _utils__WEBPACK_IMPORTED_MODULE_2__.jwtToken.createToken(UserSignup); // return res.status(200).send({UserSignup,token,message:{success:\"user signup successfull\"}})\n\n      return res.status(200).send({\n        id,\n        firstname,\n        lastname,\n        email,\n        dateofbirth,\n        token,\n        message: {\n          success: \"user signup successfull\"\n        }\n      });\n    } catch (error) {\n      return next(new Error(error));\n    }\n  },\n\n  async Signin(req, res, next) {\n    try {\n      // return console.log(req.body);\n      const {\n        email,\n        password\n      } = req.body;\n      const UserSignIn = await User.findOne({\n        where: {\n          email\n        }\n      }); // req.session.Userinfo = UserSignIn.id;\n\n      if (UserSignIn && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.comparePassword)(password, UserSignIn.password)) {\n        const {\n          id,\n          email,\n          firstname,\n          lastname,\n          dateofbirth\n        } = UserSignIn;\n        const token = _utils__WEBPACK_IMPORTED_MODULE_2__.jwtToken.createToken(UserSignIn); // console.log(typeof req.session.Userinfo,' req.session.Userinfo');\n\n        return res.status(200).send({\n          id,\n          email,\n          firstname,\n          lastname,\n          dateofbirth,\n          token,\n          message: {\n            success: \"user signin successfull\"\n          }\n        });\n      }\n\n      if (!UserSignIn) {\n        return res.status(404).send('User Not found');\n      }\n\n      return res.status(400).send('invalid password and email');\n    } catch (error) {\n      return next(new Error(error));\n    }\n  },\n\n  async Edit(req, res, next) {\n    try {\n      const UserEdit = await User.findOne({\n        where: {\n          id: req.params.id\n        }\n      });\n      const {\n        id,\n        firstname,\n        lastname,\n        email,\n        dateofbirth,\n        password\n      } = UserEdit; //   return console.log(firstname,lastname,email,dateofbirth,'userdata');\n      // return res.status(200).send(UserEdit);\n\n      return res.status(200).send({\n        firstname,\n        lastname,\n        email,\n        dateofbirth\n      });\n    } catch (error) {\n      return next(new Error(error));\n    }\n  },\n\n  async Update(req, res, next) {\n    try {\n      const UserEdit = await User.findOne({\n        where: {\n          id: req.params.id\n        }\n      }); // return console.log(UserEdit.firstname,'useredit');\n      // const {firstname,lastname,email,dateofbirth} = UserEdit;\n\n      const UserUpdate = await User.update({\n        firstname: req.body.firstname || UserEdit.firstname,\n        lastname: req.body.lastname || UserEdit.lastname,\n        email: req.body.email || UserEdit.email,\n        dateofbirth: req.body.dateofbirth || UserEdit.dateofbirth\n      }, {\n        where: {\n          id: UserEdit.id\n        }\n      }, {\n        returning: true,\n        plain: true\n      }); //    return console.log(UserEdit,'edit');\n\n      return res.status(200).send(UserUpdate); // return res.status(200).send({firstname,lastname,email,dateofbirth})\n    } catch (error) {\n      return next(new Error(error));\n    }\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserController);\n\n//# sourceURL=webpack://reactproject/./src/Http/controllers/UserController.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/authMiddleware */ \"./middleware/authMiddleware.js\");\n/* harmony import */ var _middleware_authorized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/authorized */ \"./middleware/authorized.js\");\n/* harmony import */ var _middleware_fileMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middleware/fileMiddleware */ \"./middleware/fileMiddleware.js\");\n/* harmony import */ var _Http_controllers_ProfileController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Http/controllers/ProfileController */ \"./src/Http/controllers/ProfileController.js\");\n/* harmony import */ var _Http_controllers_UserController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Http/controllers/UserController */ \"./src/Http/controllers/UserController.js\");\n\n\n\n\n\n\nconst routes = app => {\n  /*  -------user Route----------*/\n  app.post('/api/signup', _middleware_authMiddleware__WEBPACK_IMPORTED_MODULE_0__.default, _Http_controllers_UserController__WEBPACK_IMPORTED_MODULE_4__.default.create);\n  app.post('/api/signin', _Http_controllers_UserController__WEBPACK_IMPORTED_MODULE_4__.default.Signin);\n  app.get('/api/edit/:id', _Http_controllers_UserController__WEBPACK_IMPORTED_MODULE_4__.default.Edit);\n  app.post('/api/edit/:id', _Http_controllers_UserController__WEBPACK_IMPORTED_MODULE_4__.default.Update);\n  /*   -------Profile Route---------- */\n\n  app.post('/api/create_profile', _middleware_fileMiddleware__WEBPACK_IMPORTED_MODULE_2__.default.single('profileiamage'), _middleware_authorized__WEBPACK_IMPORTED_MODULE_1__.default, _Http_controllers_ProfileController__WEBPACK_IMPORTED_MODULE_3__.default.create);\n  app.get('/api/user_profile_by', _middleware_authorized__WEBPACK_IMPORTED_MODULE_1__.default, _Http_controllers_ProfileController__WEBPACK_IMPORTED_MODULE_3__.default.userProfileBy);\n  app.patch('/api/user_profile_update', _middleware_fileMiddleware__WEBPACK_IMPORTED_MODULE_2__.default.single('profileiamage'), _middleware_authorized__WEBPACK_IMPORTED_MODULE_1__.default, _Http_controllers_ProfileController__WEBPACK_IMPORTED_MODULE_3__.default.Profileupdate); // app.patch('/api/user_profile_update/:id',upload.single('profileiamage'),authorized, ProfileController.Profileupdate);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://reactproject/./src/routes/index.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jwtToken\": () => /* binding */ jwtToken,\n/* harmony export */   \"hashPassword\": () => /* binding */ hashPassword,\n/* harmony export */   \"comparePassword\": () => /* binding */ comparePassword\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_2__.config)();\nconst jwtToken = {\n  createToken({\n    id,\n    email\n  }) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n      userId: id,\n      email\n    }, process.env.JWT_SECRET, {\n      expiresIn: '24h'\n    });\n  },\n\n  verifyToken(token) {\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, {\n      expiresIn: '24h'\n    });\n    return decoded;\n  }\n\n};\nconst hashPassword = password => bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, 10);\nconst comparePassword = (password, hash) => bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, hash); // export const comparePassword = (password, hash) => ;\n\n//# sourceURL=webpack://reactproject/./utils/index.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto-js");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");;

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");;

/***/ }),

/***/ "nodemailer-sendgrid":
/*!**************************************!*\
  !*** external "nodemailer-sendgrid" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer-sendgrid");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");;

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("validator");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;