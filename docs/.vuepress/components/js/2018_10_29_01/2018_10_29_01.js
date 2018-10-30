// 区分桌面浏览器与移动浏览器
var OS = {
  WINDOWS: 'win',
  MACINTOSH: 'mac',
  LINUX: 'linux',
  IOS: 'iOS',
  ANDROID: 'Android',
  BLACKBERRY: 'bb',
  WINDOWS_PHONE: 'winphone',
};
var result = getOS();
alert(JSON.stringify(result));
function getOS() {
  var userAgent = navigator.userAgent;
  var platform, result;
  function getDesktopOS() {
    var pf = navigator.platform;
    if (pf.indexOf('Win') != -1) {
      // 说明当前是Windows操作系统
      var rVersion = /Windows NT (\d+).(\d)/i;
      var uaResult = userAgent.match(rVersion);
      var sVersionStr = '';
      if (uaResult[1] == '6') {
        if (uaResult[2] == 1) {
          sVersionStr = '7'; // 说明当前运行在Windows 7 中
        } else if (uaResult[2] > 1) {
          sVersionStr = '8'; // 说明当前运行在Windows 8 中
        }
      } else {
        sVersionStr = uaResult[1];
      }
      return { name: OS.WINDOWS, versionStr: sVersionStr };
    } else if (pf.indexOf('Mac') != -1) {
      return { name: OS.MACINTOSH, versionStr: '' }; // Macintosh操作系统
    } else if (pf.indexOf('Linux') != -1) {
      return { name: OS.LINUX, versionStr: '' }; // 说明当前运行在Linux操作系统
    }
    return null;
  }
  platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式
  result = userAgent.match(platform);
  if (result) {
    return { name: OS.WINDOWS_PHONE, versionStr: result[1] };
  }
  // BlackBerry 10
  if (userAgent.indexOf('(BB10;') > 0) {
    platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression
    result = userAgent.match(platform);
    if (result) {
      return { name: OS.BLACKBERRY, versionStr: result[1] };
    } else {
      return { name: OS.BLACKBERRY, versionStr: '10' };
    }
  }
  // iOS, Android, BlackBerry 6.0+:
  platform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
  result = userAgent.match(platform);
  if (result) {
    var appleDevices = /iPhone|iPad|iPod/;
    var bbDevices = /PlayBook|BlackBerry/;
    if (result[0].match(appleDevices)) {
      result[3] = result[3].replace(/_/g, '.');
      return { name: OS.IOS, versionStr: result[3] }; // iOS操作系统
    } else if (result[2].match(/Android/)) {
      result[2] = result[2].replace(/\s/g, '');
      return { name: OS.ANDROID, versionStr: result[3] }; // Android操作系统
    } else if (result[0].match(bbDevices)) {
      return { name: OS.BLACKBERRY, versionStr: result[4] }; // Blackberry
    }
  }
  //Android平台上的Firefox浏览器
  platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
  result = userAgent.match(platform);
  if (result) {
    return {
      name: OS.ANDROID,
      versionStr: result.length == 3 ? result[2] : '',
    };
  }
  // Desktop
  return getDesktopOS();
}
