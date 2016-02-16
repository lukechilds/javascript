So you want in-editor linting?

## Table of Contents
- [Sublime Package Control](https://github.com/unsplash/javascript/tree/master/linters/SublimeLinter#sublime-package-control)
- [SublimeLinter](https://github.com/unsplash/javascript/tree/master/linters/SublimeLinter#sublimelinter)
- [SublimeLinter-contrib-eslint](https://github.com/unsplash/javascript/tree/master/linters/SublimeLinter#sublimelinter-contrib-eslint)
- [SublimeLinter Preferences](https://github.com/unsplash/javascript/tree/master/linters/SublimeLinter#sublimelinter-preferences)
- [ESLint](https://github.com/unsplash/javascript/tree/master/linters/SublimeLinter#eslint)

## Sublime Package Control
#### Install Sublime Package Control
> Show the Console

```
View > Show Console
```

> Paste the following

```
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

*Full instructions [here](https://packagecontrol.io/installation#st3)*

## SublimeLinter
> Search and Install the following package

```
SublimeLinter
```

## SublimeLinter-contrib-eslint
> Search and Install the following package

```
SublimeLinter-contrib-eslint
```

## Babel Syntax Highlighting
> Search and Install the following package

```
Babel
```

## SublimeLinter Preferences
> Copy [`SublimeLinter.sublime-settings`](https://github.com/unsplash/javascript/blob/master/linters/SublimeLinter/SublimeLinter.sublime-settings) to your SublimeLinter User Settings

```
Sublime Text -> Prefences -> Package Settings -> SublimeLinter -> Settings-User
```

> Replace `INSERT YOUR NODE PATH HERE` with your node path

```
which node
```

```js
"paths": {
  "linux": [],
  "osx": [
    "INSERT YOUR NODE PATH HERE" // <---- Paste it here.
  ],
  "windows": []
}
```

## ESLint
> Install ESLint, Babel ESLint and the Unsplash Config

```
npm i -g eslint@1.* babel-eslint eslint-config-unsplash eslint-plugin-react
```
