# compress-png-jpg-webp-gif

一时兴起扒了[onlineimagetool](https://www.onlineimagetool.com/zh/compress-png-jpg-webp-gif)的图片压缩功能。

> 它采用了[webassembly](https://webassembly.org/)技术。浏览器已经开始部分支持，`node`在`v15.12.0`开始作为实验性内容支持。

## 与kuma-imagemin对比

### 实现

相比于之前研究的[kuma-imagemin](https://github.com/xiek881028/kuma-imagemin)，同样是将`C`或`C++`的算法在纯`js`环境下运行。不过之前是将`C`的代码转成`js`代码运行，而这里是采用生成一个浏览器可识别的`.wasm`文件运行。想法很棒，思路很有意思。

### 局限性

由于`node`目前对`webassembly`的支持很差，所以这种压缩方式暂时只局限于浏览器使用。命令行调用依然只能用`kuma-imagemin`

### 优势

- `kuma-imagemin`目前只能压缩`jpg`、`png`，而`compress-png-jpg-webp-gif`可以压缩`jpg`、`png`、`gif`、`webp`。
- `compress-png-jpg-webp-gif`在`jpg`的压缩上可以压缩`kuma-imagemin`无法继续压缩的文件。但是虽然它号称是无损压缩，实际测试过程中发现质量其实有所损失，其质量大约与`kuma-imagemin`设置质量为`75`相当

### 压缩差异

`kuma-imagemin`是对不同类型的图片文件采用不同的压缩算法。`compress-png-jpg-webp-gif`在阅读其源码时发现，全部是采用`png`的压缩算法。`gif`可以直接采用`png`的压缩算法（很神奇，不知道为啥），`jpg`和`webp`都是通过`canvas`转化后使用`png`压缩算法。

### 感想

`compress-png-jpg-webp-gif`算法未开源，不知道底层是使用什么加密算法还是自研。`.wasm`为二进制文件，代码无法解析，所以算法只能成谜。调用的js大量使用了浏览器环境变量`window`和`document`，要剥离成浏览器与node通用的包较为困难。

这种`js`压缩图片算法的优势在于不需要安装复杂的代码环境，也无需上传文件，节省了带宽与上传的等待时间。如果做成`api`的形式，对比强计算语言`C`，完全没优势。所以如果`node`支持，可以作为项目图片自动压缩的插件，其他用法待挖掘。
