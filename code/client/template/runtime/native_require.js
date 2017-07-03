
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/dragonBones/dragonBones.js",
	"thirdparty/protobuf/bin/protobuf/protobuf.js",
	"thirdparty/jszip/bin/jszip/jszip.js",
	"polyfill/promise.js",
	"bin-debug/core/com/Component.js",
	"bin-debug/core/com/EUIComponent.js",
	"bin-debug/core/data/Dictionary.js",
	"bin-debug/core/event/EventData.js",
	"bin-debug/core/interfaces/ILoadingUI.js",
	"bin-debug/core/net/HttpAPI.js",
	"bin-debug/core/com/Layer.js",
	"bin-debug/core/Control.js",
	"bin-debug/core/Core.js",
	"bin-debug/core/data/Callback.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/core/data/GameMode.js",
	"bin-debug/core/data/Node.js",
	"bin-debug/core/data/NodeList.js",
	"bin-debug/core/com/EUILayer.js",
	"bin-debug/core/event/EventID.js",
	"bin-debug/core/EventCenter.js",
	"bin-debug/core/FrameEventCenter.js",
	"bin-debug/core/interfaces/IComponent.js",
	"bin-debug/core/com/InputComponent.js",
	"bin-debug/core/interfaces/IMessage.js",
	"bin-debug/core/interfaces/IRenderLoop.js",
	"bin-debug/core/LayerCenter.js",
	"bin-debug/core/net/ByteBuffer.js",
	"bin-debug/core/com/Animation.js",
	"bin-debug/core/net/MessageData.js",
	"bin-debug/core/net/ProtoFactory.js",
	"bin-debug/core/net/SocketAPI.js",
	"bin-debug/core/TimerManager.js",
	"bin-debug/core/utils/Base64.js",
	"bin-debug/core/utils/CachePool.js",
	"bin-debug/core/utils/DateUtils.js",
	"bin-debug/core/utils/DebugUtils.js",
	"bin-debug/core/utils/Long.js",
	"bin-debug/core/utils/MathUtils.js",
	"bin-debug/core/utils/MCFactory.js",
	"bin-debug/core/utils/MD5.js",
	"bin-debug/core/utils/PlatUtils.js",
	"bin-debug/core/utils/ResUtils.js",
	"bin-debug/core/utils/SoundUtils.js",
	"bin-debug/core/utils/TextUtils.js",
	"bin-debug/core/utils/WebUtils.js",
	"bin-debug/core/utils/XMLUtils.js",
	"bin-debug/game/enums/LayerEnum.js",
	"bin-debug/game/enums/ModuleEnum.js",
	"bin-debug/game/views/loading/MainLoadingUI.js",
	"bin-debug/game/views/loading/PreLoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "fixedWide",
		contentWidth: 1334,
		contentHeight: 750,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};