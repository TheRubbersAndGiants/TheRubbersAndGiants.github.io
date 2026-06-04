(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"html_HTML5 Canvas_atlas_1", frames: [[0,417,307,221],[0,0,422,415],[309,502,200,200],[424,0,200,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.RedyColour = function() {
	this.initialize(ss["html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TacoBozeo = function() {
	this.initialize(ss["html_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.textbubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-80.75,-62.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-107.75,-78.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textbubble, new cjs.Rectangle(-107.7,-78.4,211,207.5), null);


(lib.TacoBozeo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TacoBozeo();
	this.instance.setTransform(-100,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-250,200,500);


(lib.RedyColour_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RedyColour();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


// stage content:
(lib.html_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fg
	this.instance = new lib.TacoBozeo_1("synched",0);
	this.instance.setTransform(501.5,616.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:596.6781,y:580.0096},0).wait(1).to({x:687.8675,y:545.0964},0).wait(1).to({x:766.3637,y:515.043},0).wait(1).to({x:828.9,y:491.1},0).wait(1).to({x:882.1476,y:536.7694},0).wait(1).to({x:920.9493,y:570.0489},0).wait(1).to({x:947.957,y:593.2129},0).wait(1).to({x:965.4033,y:608.1762},0).wait(1).to({x:975.05,y:616.45},0).wait(1).to({x:965.5684,y:606.4118},0).wait(1).to({x:950.6392,y:590.6063},0).wait(1).to({x:928.8101,y:567.4958},0).wait(1).to({x:898.2079,y:535.0973},0).wait(1).to({x:856.65,y:491.1},0).wait(1).to({x:800.5705,y:510.8932},0).wait(1).to({x:731.5612,y:535.25},0).wait(1).to({x:653.9982,y:562.6258},0).wait(1).to({x:575.264,y:590.415},0).wait(1).to({x:501.5,y:616.45},0).wait(1).to({x:596.6781,y:580.0096},0).wait(1).to({x:687.8675,y:545.0964},0).wait(1).to({x:766.3637,y:515.043},0).wait(1).to({x:828.9,y:491.1},0).wait(1).to({x:882.1476,y:536.7694},0).wait(1).to({x:920.9493,y:570.0489},0).wait(1).to({x:947.957,y:593.2129},0).wait(1).to({x:965.4033,y:608.1762},0).wait(1).to({x:975.05,y:616.45},0).wait(1).to({x:965.5684,y:606.4118},0).wait(1).to({x:950.6392,y:590.6063},0).wait(1).to({x:928.8101,y:567.4958},0).wait(1).to({x:898.2079,y:535.0973},0).wait(1).to({x:856.65,y:491.1},0).wait(1).to({x:800.5705,y:510.8932},0).wait(1).to({x:731.5612,y:535.25},0).wait(1).to({x:653.9982,y:562.6258},0).wait(1).to({x:575.264,y:590.415},0).wait(1).to({x:501.5,y:616.45},0).wait(1).to({x:596.6781,y:580.0096},0).wait(1).to({x:687.8675,y:545.0964},0).wait(1).to({x:766.3637,y:515.043},0).wait(1).to({x:828.9,y:491.1},0).wait(1).to({x:882.1476,y:536.7694},0).wait(1).to({x:920.9493,y:570.0489},0).wait(1).to({x:947.957,y:593.2129},0).wait(1).to({x:965.4033,y:608.1762},0).wait(1).to({x:975.05,y:616.45},0).wait(1).to({x:965.5684,y:606.4118},0).wait(1).to({x:950.6392,y:590.6063},0).wait(1).to({x:928.8101,y:567.4958},0).wait(1).to({x:898.2079,y:535.0973},0).wait(1).to({x:856.65,y:491.1},0).wait(1).to({x:800.5705,y:510.8932},0).wait(1).to({x:731.5612,y:535.25},0).wait(1).to({x:653.9982,y:562.6258},0).wait(1).to({x:575.264,y:590.415},0).wait(1).to({x:501.5,y:616.45},0).wait(1));

	// pink_e
	this.instance_1 = new lib.TacoBozeo_1("synched",0);
	this.instance_1.setTransform(501.5,616.45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({x:596.6781,y:580.0096},0).wait(1).to({x:687.8675,y:545.0964},0).wait(1).to({x:766.3637,y:515.043},0).wait(1).to({x:828.9,y:491.1},0).wait(1).to({x:882.1476,y:536.7694},0).wait(1).to({x:920.9493,y:570.0489},0).wait(1).to({x:947.957,y:593.2129},0).wait(1).to({x:965.4033,y:608.1762},0).wait(1).to({x:975.05,y:616.45},0).wait(1).to({x:965.5684,y:606.4118},0).wait(1).to({x:950.6392,y:590.6063},0).wait(1).to({x:928.8101,y:567.4958},0).wait(1).to({x:898.2079,y:535.0973},0).wait(1).to({x:856.65,y:491.1},0).wait(1).to({x:800.5705,y:510.8932},0).wait(1).to({x:731.5612,y:535.25},0).wait(1).to({x:653.9982,y:562.6258},0).wait(1).to({x:575.264,y:590.415},0).wait(1).to({x:501.5,y:616.45},0).wait(1).to({x:596.6781,y:580.0096},0).wait(1).to({x:687.8675,y:545.0964},0).wait(1).to({x:766.3637,y:515.043},0).wait(1).to({x:828.9,y:491.1},0).wait(1).to({x:882.1476,y:536.7694},0).wait(1).to({x:920.9493,y:570.0489},0).wait(1).to({x:947.957,y:593.2129},0).wait(1).to({x:965.4033,y:608.1762},0).wait(1).to({x:975.05,y:616.45},0).wait(1).to({x:965.5684,y:606.4118},0).wait(1).to({x:950.6392,y:590.6063},0).wait(1).to({x:928.8101,y:567.4958},0).wait(1).to({x:898.2079,y:535.0973},0).wait(1).to({x:856.65,y:491.1},0).wait(1).to({x:800.5705,y:510.8932},0).wait(1).to({x:731.5612,y:535.25},0).wait(1).to({x:653.9982,y:562.6258},0).wait(1).to({x:575.264,y:590.415},0).wait(1).to({x:501.5,y:616.45},0).wait(1));

	// mg
	this.instance_2 = new lib.textbubble();
	this.instance_2.setTransform(1375.05,471.45,1,0.0012,0,0,0,-2.1,124.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleY:0.8728,x:1375.1,y:475.4},11).to({x:1969.75,y:451.15},12).to({_off:true},1).wait(11));

	// bg
	this.instance_3 = new lib.RedyColour_1("synched",0);
	this.instance_3.setTransform(2059.55,627.85,1.9126,0.5655,0,-64.6395,-1.6513,0,0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regY:0,scaleX:1.831,scaleY:0.6044,skewX:-58.8579,skewY:-1.5036,x:1997.7597,y:621.0868},0).wait(1).to({scaleX:1.7518,scaleY:0.6421,skewX:-53.2472,skewY:-1.3603,x:1937.8943,y:614.5713},0).wait(1).to({scaleX:1.6761,scaleY:0.6781,skewX:-47.8882,skewY:-1.2234,x:1880.7159,y:608.3476},0).wait(1).to({scaleX:1.605,scaleY:0.712,skewX:-42.8478,skewY:-1.0946,x:1826.938,y:602.4937},0).wait(1).to({scaleX:1.5389,scaleY:0.7434,skewX:-38.1719,skewY:-0.9752,x:1777.0521,y:597.0633},0).wait(1).to({scaleX:1.4784,scaleY:0.7722,skewX:-33.8841,skewY:-0.8656,x:1731.3062,y:592.0836},0).wait(1).to({scaleX:1.4234,scaleY:0.7984,skewX:-29.9871,skewY:-0.7661,x:1689.7317,y:587.558},0).wait(1).to({scaleX:1.3737,scaleY:0.8221,skewX:-26.4685,skewY:-0.6762,x:1652.1956,y:583.4722},0).wait(1).to({scaleX:1.3291,scaleY:0.8433,skewX:-23.3061,skewY:-0.5954,x:1618.4593,y:579.8002},0).wait(1).to({scaleX:1.2891,scaleY:0.8624,skewX:-20.4723,skewY:-0.523,x:1588.2285,y:576.5098},0).wait(1).to({scaleX:1.2533,scaleY:0.8794,skewX:-17.9376,skewY:-0.4582,x:1561.1895,y:573.5671},0).wait(1).to({scaleX:1.2213,scaleY:0.8946,skewX:-15.6731,skewY:-0.4004,x:1537.0331,y:570.9383},0).wait(1).to({scaleX:1.1928,scaleY:0.9083,skewX:-13.6515,skewY:-0.3488,x:1515.4682,y:568.5916},0).wait(1).to({scaleX:1.1673,scaleY:0.9204,skewX:-11.8478,skewY:-0.3027,x:1496.2281,y:566.498},0).wait(1).to({scaleX:1.1446,scaleY:0.9312,skewX:-10.2396,skewY:-0.2616,x:1479.0729,y:564.6314},0).wait(1).to({scaleX:1.1244,scaleY:0.9408,skewX:-8.8068,skewY:-0.225,x:1463.7892,y:562.9685},0).wait(1).to({scaleX:1.1063,scaleY:0.9494,skewX:-7.5317,skewY:-0.1924,x:1450.1881,y:561.4888},0).wait(1).to({scaleX:1.0904,scaleY:0.957,skewX:-6.3988,skewY:-0.1635,x:1438.1033,y:560.1741},0).wait(1).to({scaleX:1.0762,scaleY:0.9637,skewX:-5.3942,skewY:-0.1378,x:1427.3883,y:559.0085},0).wait(1).to({scaleX:1.0636,scaleY:0.9697,skewX:-4.506,skewY:-0.1151,x:1417.9142,y:557.9779},0).wait(1).to({scaleX:1.0526,scaleY:0.975,skewX:-3.7235,skewY:-0.0951,x:1409.5673,y:557.0699},0).wait(1).to({scaleX:1.0429,scaleY:0.9796,skewX:-3.0373,skewY:-0.0776,x:1402.2474,y:556.2737},0).wait(1).to({scaleX:1.0344,scaleY:0.9836,skewX:-2.439,skewY:-0.0623,x:1395.8654,y:555.5795},0).wait(1).to({scaleX:1.0271,scaleY:0.9871,skewX:-1.9212,skewY:-0.0491,x:1390.3428,y:554.9788},0).wait(1).to({scaleX:1.0209,scaleY:0.9901,skewX:-1.4775,skewY:-0.0377,x:1385.6094,y:554.464},0).wait(1).to({scaleX:1.0156,scaleY:0.9926,skewX:-1.1018,skewY:-0.0281,x:1381.6027,y:554.0282},0).wait(1).to({scaleX:1.0111,scaleY:0.9947,skewX:-0.7891,skewY:-0.0202,x:1378.2668,y:553.6654},0).wait(1).to({scaleX:1.0075,scaleY:0.9964,skewX:-0.5345,skewY:-0.0137,x:1375.5515,y:553.3701},0).wait(1).to({scaleX:1.0047,scaleY:0.9978,skewX:-0.3339,skewY:-0.0085,x:1373.4118,y:553.1374},0).wait(1).to({scaleX:1.0026,scaleY:0.9988,skewX:-0.1835,skewY:-0.0047,x:1371.8068,y:552.9628},0).wait(1).to({scaleX:1.0011,scaleY:0.9995,skewX:-0.0797,skewY:-0.002,x:1370.7,y:552.8424},0).wait(1).to({scaleX:1.0003,scaleY:0.9999,rotation:-0.0195,skewX:0,skewY:0,x:1370.0578,y:552.7726},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:1369.85,y:552.95},0).to({rotation:166.1544,x:1973.95,y:552.9},12).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1361.5,781.1,940.1999999999998,85.39999999999998);
// library properties:
lib.properties = {
	id: '7DC6A23591E0EA40B6386B299688FF8A',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/html_HTML5 Canvas_atlas_1.png", id:"html_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DC6A23591E0EA40B6386B299688FF8A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;