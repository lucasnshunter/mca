// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: demoiselle.ggsk
// Generated ter 14. fev 18:27:17 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._planta=document.createElement('div');
		this._planta.ggId="planta";
		this._planta.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._planta.ggVisible=false;
		this._planta.className='ggskin ggskin_image';
		this._planta.ggType='image';
		this._planta.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-191 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 48px;';
		hs+='top:  -191px;';
		hs+='width: 470px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='opacity: 0.6;';
		hs+='visibility: hidden;';
		this._planta.setAttribute('style',hs);
		this._planta__img=document.createElement('img');
		this._planta__img.className='ggskin ggskin_image';
		this._planta__img.setAttribute('src',basePath + 'html5/control/planta.png');
		this._planta__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._planta__img.className='ggskin ggskin_image';
		this._planta__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._planta__img);
		this._planta.appendChild(this._planta__img);
		this._planta.onmouseover=function () {
			me._planta.style[domTransition]='none';
			me._planta.style.opacity='1';
			me._planta.style.visibility=me._planta.ggVisible?'inherit':'hidden';
		}
		this._planta.onmouseout=function () {
			me._planta.style[domTransition]='none';
			me._planta.style.opacity='0.6';
			me._planta.style.visibility=me._planta.ggVisible?'inherit':'hidden';
		}
		this._fundo_select=document.createElement('div');
		this._fundo_select.ggId="fundo_select";
		this._fundo_select.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fundo_select.ggVisible=true;
		this._fundo_select.className='ggskin ggskin_image';
		this._fundo_select.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._fundo_select.setAttribute('style',hs);
		this._fundo_select__img=document.createElement('img');
		this._fundo_select__img.className='ggskin ggskin_image';
		this._fundo_select__img.setAttribute('src',basePath + 'html5/control/fundo_select.png');
		this._fundo_select__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._fundo_select__img.className='ggskin ggskin_image';
		this._fundo_select__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fundo_select__img);
		this._fundo_select.appendChild(this._fundo_select__img);
		this._planta.appendChild(this._fundo_select);
		this._pt_lavabo=document.createElement('div');
		this._pt_lavabo.ggId="pt_lavabo";
		this._pt_lavabo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_lavabo.ggVisible=true;
		this._pt_lavabo.className='ggskin ggskin_button';
		this._pt_lavabo.ggType='button';
		hs ='position:absolute;';
		hs+='left: 44px;';
		hs+='top:  298px;';
		hs+='width: 30px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_lavabo.setAttribute('style',hs);
		this._pt_lavabo__img=document.createElement('img');
		this._pt_lavabo__img.className='ggskin ggskin_button';
		this._pt_lavabo__img.setAttribute('src',basePath + 'html5/control/pt_lavabo.png');
		this._pt_lavabo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_lavabo__img.className='ggskin ggskin_button';
		this._pt_lavabo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_lavabo__img);
		this._pt_lavabo.appendChild(this._pt_lavabo__img);
		this._pt_lavabo.onclick=function () {
			flag=me._img_lavabo.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._img_lavabo.style[domTransition]='none';
			} else {
				me._img_lavabo.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._img_lavabo.ggParameter.sx=0;me._img_lavabo.ggParameter.sy=0;
				me._img_lavabo.style[domTransform]=parameterToTransform(me._img_lavabo.ggParameter);
			} else {
				me._img_lavabo.ggParameter.sx=1;me._img_lavabo.ggParameter.sy=1;
				me._img_lavabo.style[domTransform]=parameterToTransform(me._img_lavabo.ggParameter);
			}
			me._img_lavabo.ggScaleActive=!flag;
		}
		this._planta.appendChild(this._pt_lavabo);
		this._pt_estar=document.createElement('div');
		this._pt_estar.ggId="pt_estar";
		this._pt_estar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_estar.ggVisible=true;
		this._pt_estar.className='ggskin ggskin_button';
		this._pt_estar.ggType='button';
		hs ='position:absolute;';
		hs+='left: 134px;';
		hs+='top:  243px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_estar.setAttribute('style',hs);
		this._pt_estar__img=document.createElement('img');
		this._pt_estar__img.className='ggskin ggskin_button';
		this._pt_estar__img.setAttribute('src',basePath + 'html5/control/pt_estar.png');
		this._pt_estar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_estar__img.className='ggskin ggskin_button';
		this._pt_estar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_estar__img);
		this._pt_estar.appendChild(this._pt_estar__img);
		this._pt_estar.onclick=function () {
			me._abre_estar.onclick();
		}
		this._planta.appendChild(this._pt_estar);
		this._pt_suitecasal=document.createElement('div');
		this._pt_suitecasal.ggId="pt_suitecasal";
		this._pt_suitecasal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_suitecasal.ggVisible=true;
		this._pt_suitecasal.className='ggskin ggskin_button';
		this._pt_suitecasal.ggType='button';
		hs ='position:absolute;';
		hs+='left: 242px;';
		hs+='top:  279px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_suitecasal.setAttribute('style',hs);
		this._pt_suitecasal__img=document.createElement('img');
		this._pt_suitecasal__img.className='ggskin ggskin_button';
		this._pt_suitecasal__img.setAttribute('src',basePath + 'html5/control/pt_suitecasal.png');
		this._pt_suitecasal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_suitecasal__img.className='ggskin ggskin_button';
		this._pt_suitecasal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_suitecasal__img);
		this._pt_suitecasal.appendChild(this._pt_suitecasal__img);
		this._pt_suitecasal.onclick=function () {
			me._abre_suitecasal.onclick();
		}
		this._planta.appendChild(this._pt_suitecasal);
		this._pt_varanda=document.createElement('div');
		this._pt_varanda.ggId="pt_varanda";
		this._pt_varanda.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_varanda.ggVisible=true;
		this._pt_varanda.className='ggskin ggskin_button';
		this._pt_varanda.ggType='button';
		hs ='position:absolute;';
		hs+='left: 93px;';
		hs+='top:  37px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_varanda.setAttribute('style',hs);
		this._pt_varanda__img=document.createElement('img');
		this._pt_varanda__img.className='ggskin ggskin_button';
		this._pt_varanda__img.setAttribute('src',basePath + 'html5/control/pt_varanda.png');
		this._pt_varanda__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_varanda__img.className='ggskin ggskin_button';
		this._pt_varanda__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_varanda__img);
		this._pt_varanda.appendChild(this._pt_varanda__img);
		this._pt_varanda.onclick=function () {
			me._abre_varanda.onclick();
		}
		this._planta.appendChild(this._pt_varanda);
		this._pt_suitemenino=document.createElement('div');
		this._pt_suitemenino.ggId="pt_suitemenino";
		this._pt_suitemenino.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_suitemenino.ggVisible=true;
		this._pt_suitemenino.className='ggskin ggskin_button';
		this._pt_suitemenino.ggType='button';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  91px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_suitemenino.setAttribute('style',hs);
		this._pt_suitemenino__img=document.createElement('img');
		this._pt_suitemenino__img.className='ggskin ggskin_button';
		this._pt_suitemenino__img.setAttribute('src',basePath + 'html5/control/pt_suitemenino.png');
		this._pt_suitemenino__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_suitemenino__img.className='ggskin ggskin_button';
		this._pt_suitemenino__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_suitemenino__img);
		this._pt_suitemenino.appendChild(this._pt_suitemenino__img);
		this._pt_suitemenino.onclick=function () {
			me._abre_suitemenino.onclick();
		}
		this._planta.appendChild(this._pt_suitemenino);
		this._pt_banhocasal=document.createElement('div');
		this._pt_banhocasal.ggId="pt_banhocasal";
		this._pt_banhocasal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_banhocasal.ggVisible=true;
		this._pt_banhocasal.className='ggskin ggskin_button';
		this._pt_banhocasal.ggType='button';
		hs ='position:absolute;';
		hs+='left: 383px;';
		hs+='top:  266px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_banhocasal.setAttribute('style',hs);
		this._pt_banhocasal__img=document.createElement('img');
		this._pt_banhocasal__img.className='ggskin ggskin_button';
		this._pt_banhocasal__img.setAttribute('src',basePath + 'html5/control/pt_banhocasal.png');
		this._pt_banhocasal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_banhocasal__img.className='ggskin ggskin_button';
		this._pt_banhocasal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_banhocasal__img);
		this._pt_banhocasal.appendChild(this._pt_banhocasal__img);
		this._pt_banhocasal.onclick=function () {
			me._abre_banhocasal.onclick();
		}
		this._planta.appendChild(this._pt_banhocasal);
		this._pt_cozinha=document.createElement('div');
		this._pt_cozinha.ggId="pt_cozinha";
		this._pt_cozinha.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_cozinha.ggVisible=true;
		this._pt_cozinha.className='ggskin ggskin_button';
		this._pt_cozinha.ggType='button';
		hs ='position:absolute;';
		hs+='left: 49px;';
		hs+='top:  156px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_cozinha.setAttribute('style',hs);
		this._pt_cozinha__img=document.createElement('img');
		this._pt_cozinha__img.className='ggskin ggskin_button';
		this._pt_cozinha__img.setAttribute('src',basePath + 'html5/control/pt_cozinha.png');
		this._pt_cozinha__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_cozinha__img.className='ggskin ggskin_button';
		this._pt_cozinha__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_cozinha__img);
		this._pt_cozinha.appendChild(this._pt_cozinha__img);
		this._pt_cozinha.onclick=function () {
			me._abre_cozinha.onclick();
		}
		this._planta.appendChild(this._pt_cozinha);
		this._pt_suitemenina=document.createElement('div');
		this._pt_suitemenina.ggId="pt_suitemenina";
		this._pt_suitemenina.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_suitemenina.ggVisible=true;
		this._pt_suitemenina.className='ggskin ggskin_button';
		this._pt_suitemenina.ggType='button';
		hs ='position:absolute;';
		hs+='left: 390px;';
		hs+='top:  146px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_suitemenina.setAttribute('style',hs);
		this._pt_suitemenina__img=document.createElement('img');
		this._pt_suitemenina__img.className='ggskin ggskin_button';
		this._pt_suitemenina__img.setAttribute('src',basePath + 'html5/control/pt_suitemenina.png');
		this._pt_suitemenina__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_suitemenina__img.className='ggskin ggskin_button';
		this._pt_suitemenina__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_suitemenina__img);
		this._pt_suitemenina.appendChild(this._pt_suitemenina__img);
		this._pt_suitemenina.onclick=function () {
			me._abre_suitemenina.onclick();
		}
		this._planta.appendChild(this._pt_suitemenina);
		this._pt_banhoamericano=document.createElement('div');
		this._pt_banhoamericano.ggId="pt_banhoamericano";
		this._pt_banhoamericano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pt_banhoamericano.ggVisible=true;
		this._pt_banhoamericano.className='ggskin ggskin_button';
		this._pt_banhoamericano.ggType='button';
		hs ='position:absolute;';
		hs+='left: 320px;';
		hs+='top:  136px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pt_banhoamericano.setAttribute('style',hs);
		this._pt_banhoamericano__img=document.createElement('img');
		this._pt_banhoamericano__img.className='ggskin ggskin_button';
		this._pt_banhoamericano__img.setAttribute('src',basePath + 'html5/control/pt_banhoamericano.png');
		this._pt_banhoamericano__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._pt_banhoamericano__img.className='ggskin ggskin_button';
		this._pt_banhoamericano__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pt_banhoamericano__img);
		this._pt_banhoamericano.appendChild(this._pt_banhoamericano__img);
		this._pt_banhoamericano.onclick=function () {
			me._abre_banhoamericano.onclick();
		}
		this._planta.appendChild(this._pt_banhoamericano);
		this.divSkin.appendChild(this._planta);
		this._ocultar_planta=document.createElement('div');
		this._ocultar_planta.ggId="ocultar_planta";
		this._ocultar_planta.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ocultar_planta.ggVisible=false;
		this._ocultar_planta.className='ggskin ggskin_button';
		this._ocultar_planta.ggType='button';
		this._ocultar_planta.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-108 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -108px;';
		hs+='width: 50px;';
		hs+='height: 157px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._ocultar_planta.setAttribute('style',hs);
		this._ocultar_planta__img=document.createElement('img');
		this._ocultar_planta__img.className='ggskin ggskin_button';
		this._ocultar_planta__img.setAttribute('src',basePath + 'html5/control/ocultar_planta.png');
		this._ocultar_planta__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._ocultar_planta__img.className='ggskin ggskin_button';
		this._ocultar_planta__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ocultar_planta__img);
		this._ocultar_planta.appendChild(this._ocultar_planta__img);
		this._ocultar_planta.onclick=function () {
			flag=(me._ocultar_planta.style.visibility=='hidden');
			me._ocultar_planta.style[domTransition]='none';
			me._ocultar_planta.style.visibility=flag?'inherit':'hidden';
			me._ocultar_planta.ggVisible=flag;
			flag=(me._exibir_planta.style.visibility=='hidden');
			me._exibir_planta.style[domTransition]='none';
			me._exibir_planta.style.visibility=flag?'inherit':'hidden';
			me._exibir_planta.ggVisible=flag;
			me._planta.style[domTransition]='none';
			me._planta.style.visibility='hidden';
			me._planta.ggVisible=false;
		}
		this.divSkin.appendChild(this._ocultar_planta);
		this._exibir_planta=document.createElement('div');
		this._exibir_planta.ggId="exibir_planta";
		this._exibir_planta.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._exibir_planta.ggVisible=true;
		this._exibir_planta.className='ggskin ggskin_button';
		this._exibir_planta.ggType='button';
		this._exibir_planta.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-108 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -108px;';
		hs+='width: 50px;';
		hs+='height: 157px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._exibir_planta.setAttribute('style',hs);
		this._exibir_planta__img=document.createElement('img');
		this._exibir_planta__img.className='ggskin ggskin_button';
		this._exibir_planta__img.setAttribute('src',basePath + 'html5/control/exibir_planta.png');
		this._exibir_planta__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._exibir_planta__img.className='ggskin ggskin_button';
		this._exibir_planta__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._exibir_planta__img);
		this._exibir_planta.appendChild(this._exibir_planta__img);
		this._exibir_planta.onclick=function () {
			flag=(me._exibir_planta.style.visibility=='hidden');
			me._exibir_planta.style[domTransition]='none';
			me._exibir_planta.style.visibility=flag?'inherit':'hidden';
			me._exibir_planta.ggVisible=flag;
			flag=(me._ocultar_planta.style.visibility=='hidden');
			me._ocultar_planta.style[domTransition]='none';
			me._ocultar_planta.style.visibility=flag?'inherit':'hidden';
			me._ocultar_planta.ggVisible=flag;
			flag=(me._planta.style.visibility=='hidden');
			me._planta.style[domTransition]='none';
			me._planta.style.visibility=flag?'inherit':'hidden';
			me._planta.ggVisible=flag;
		}
		this.divSkin.appendChild(this._exibir_planta);
		this._img_lavabo=document.createElement('div');
		this._img_lavabo.ggId="img_lavabo";
		this._img_lavabo.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		this._img_lavabo.ggVisible=true;
		this._img_lavabo.className='ggskin ggskin_image';
		this._img_lavabo.ggType='image';
		this._img_lavabo.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-325 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-212 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -325px;';
		hs+='top:  -212px;';
		hs+='width: 302px;';
		hs+='height: 430px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._img_lavabo.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._img_lavabo.setAttribute('style',hs);
		this._img_lavabo__img=document.createElement('img');
		this._img_lavabo__img.className='ggskin ggskin_image';
		this._img_lavabo__img.setAttribute('src',basePath + 'html5/control/img_lavabo.jpg');
		this._img_lavabo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._img_lavabo__img.className='ggskin ggskin_image';
		this._img_lavabo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._img_lavabo__img);
		this._img_lavabo.appendChild(this._img_lavabo__img);
		this._img_lavabo.onclick=function () {
			flag=me._img_lavabo.ggScaleActive;
			if (me.player.transitionsDisabled) {
				me._img_lavabo.style[domTransition]='none';
			} else {
				me._img_lavabo.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._img_lavabo.ggParameter.sx=0;me._img_lavabo.ggParameter.sy=0;
				me._img_lavabo.style[domTransform]=parameterToTransform(me._img_lavabo.ggParameter);
			} else {
				me._img_lavabo.ggParameter.sx=1;me._img_lavabo.ggParameter.sy=1;
				me._img_lavabo.style[domTransform]=parameterToTransform(me._img_lavabo.ggParameter);
			}
			me._img_lavabo.ggScaleActive=!flag;
		}
		this.divSkin.appendChild(this._img_lavabo);
		this._meni_mask=document.createElement('div');
		this._meni_mask.ggId="meni_mask";
		this._meni_mask.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._meni_mask.ggVisible=true;
		this._meni_mask.className='ggskin ggskin_container';
		this._meni_mask.ggType='container';
		this._meni_mask.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-203 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -203px;';
		hs+='top:  3px;';
		hs+='width: 199px;';
		hs+='height: 282px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+='visibility: inherit;';
		this._meni_mask.setAttribute('style',hs);
		this._menu_bg=document.createElement('div');
		this._menu_bg.ggId="menu_bg";
		this._menu_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_bg.ggVisible=true;
		this._menu_bg.className='ggskin ggskin_rectangle';
		this._menu_bg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  4px;';
		hs+='width: 187px;';
		hs+='height: 267px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		this._menu_bg.setAttribute('style',hs);
		this._menu_up=document.createElement('div');
		this._menu_up.ggId="menu_up";
		this._menu_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_up.ggVisible=true;
		this._menu_up.className='ggskin ggskin_svg';
		this._menu_up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._menu_up.setAttribute('style',hs);
		this._menu_up__img=document.createElement('img');
		this._menu_up__img.className='ggskin ggskin_svg';
		this._menu_up__img.setAttribute('src',basePath + 'html5/control/menu_up.png');
		this._menu_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._menu_up__img['ondragstart']=function() { return false; };
		this._menu_up.appendChild(this._menu_up__img);
		this._menu_up.onclick=function () {
			flag=(me._menu_bg.style.visibility=='hidden');
			me._menu_bg.style[domTransition]='none';
			me._menu_bg.style.visibility=flag?'inherit':'hidden';
			me._menu_bg.ggVisible=flag;
			flag=(me._atual_bg.style.visibility=='hidden');
			me._atual_bg.style[domTransition]='none';
			me._atual_bg.style.visibility=flag?'inherit':'hidden';
			me._atual_bg.ggVisible=flag;
		}
		this._menu_bg.appendChild(this._menu_up);
		this._retngulo_71=document.createElement('div');
		this._retngulo_71.ggId="Ret\xe2ngulo 71";
		this._retngulo_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._retngulo_71.ggVisible=true;
		this._retngulo_71.className='ggskin ggskin_rectangle';
		this._retngulo_71.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 9px;';
		hs+='top:  37px;';
		hs+='width: 23px;';
		hs+='height: 222px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #4b3934;';
		hs+='background: rgba(75,57,52,0.392157);';
		hs+='border: 0px solid #000000;';
		this._retngulo_71.setAttribute('style',hs);
		this._menu_bg.appendChild(this._retngulo_71);
		this._highlight=document.createElement('div');
		this._highlight.ggId="highlight";
		this._highlight.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._highlight.ggVisible=true;
		this._highlight.className='ggskin ggskin_rectangle';
		this._highlight.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  -2px;';
		hs+='width: 143px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.392157);';
		hs+='border: 2px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._highlight.setAttribute('style',hs);
		this._menu_bg.appendChild(this._highlight);
		this._pano_1_button=document.createElement('div');
		this._pano_1_button.ggId="pano_1_button";
		this._pano_1_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_1_button.ggVisible=true;
		this._pano_1_button.className='ggskin ggskin_rectangle';
		this._pano_1_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  6px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._pano_1_button.setAttribute('style',hs);
		this._pano_1_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=7;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_estar.onclick();
		}
		this._pano_1_text=document.createElement('div');
		this._pano_1_text__text=document.createElement('div');
		this._pano_1_text.className='ggskin ggskin_textdiv';
		this._pano_1_text.ggTextDiv=this._pano_1_text__text;
		this._pano_1_text.ggId="pano_1_text";
		this._pano_1_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_1_text.ggVisible=true;
		this._pano_1_text.className='ggskin ggskin_text';
		this._pano_1_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_1_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_1_text__text.setAttribute('style',hs);
		this._pano_1_text.ggTextDiv.innerHTML="sala de estar";
		this._pano_1_text.appendChild(this._pano_1_text__text);
		this._pano_1_button.appendChild(this._pano_1_text);
		this._menu_bg.appendChild(this._pano_1_button);
		this._pano_2_button=document.createElement('div');
		this._pano_2_button.ggId="pano_2_button";
		this._pano_2_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_2_button.ggVisible=true;
		this._pano_2_button.className='ggskin ggskin_rectangle';
		this._pano_2_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  34px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_2_button.setAttribute('style',hs);
		this._pano_2_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=35;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_varanda.onclick();
		}
		this._pano_2_text=document.createElement('div');
		this._pano_2_text__text=document.createElement('div');
		this._pano_2_text.className='ggskin ggskin_textdiv';
		this._pano_2_text.ggTextDiv=this._pano_2_text__text;
		this._pano_2_text.ggId="pano_2_text";
		this._pano_2_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_2_text.ggVisible=true;
		this._pano_2_text.className='ggskin ggskin_text';
		this._pano_2_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_2_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_2_text__text.setAttribute('style',hs);
		this._pano_2_text.ggTextDiv.innerHTML="varanda";
		this._pano_2_text.appendChild(this._pano_2_text__text);
		this._pano_2_button.appendChild(this._pano_2_text);
		this._menu_bg.appendChild(this._pano_2_button);
		this._pano_3_button=document.createElement('div');
		this._pano_3_button.ggId="pano_3_button";
		this._pano_3_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_3_button.ggVisible=true;
		this._pano_3_button.className='ggskin ggskin_rectangle';
		this._pano_3_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  63px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_3_button.setAttribute('style',hs);
		this._pano_3_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=64;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_cozinha.onclick();
		}
		this._pano_3_text=document.createElement('div');
		this._pano_3_text__text=document.createElement('div');
		this._pano_3_text.className='ggskin ggskin_textdiv';
		this._pano_3_text.ggTextDiv=this._pano_3_text__text;
		this._pano_3_text.ggId="pano_3_text";
		this._pano_3_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_3_text.ggVisible=true;
		this._pano_3_text.className='ggskin ggskin_text';
		this._pano_3_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_3_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_3_text__text.setAttribute('style',hs);
		this._pano_3_text.ggTextDiv.innerHTML="cozinha";
		this._pano_3_text.appendChild(this._pano_3_text__text);
		this._pano_3_button.appendChild(this._pano_3_text);
		this._menu_bg.appendChild(this._pano_3_button);
		this._pano_4_button=document.createElement('div');
		this._pano_4_button.ggId="pano_4_button";
		this._pano_4_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_4_button.ggVisible=true;
		this._pano_4_button.className='ggskin ggskin_rectangle';
		this._pano_4_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  90px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_4_button.setAttribute('style',hs);
		this._pano_4_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=91;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_circulacao.onclick();
		}
		this._pano_4_text=document.createElement('div');
		this._pano_4_text__text=document.createElement('div');
		this._pano_4_text.className='ggskin ggskin_textdiv';
		this._pano_4_text.ggTextDiv=this._pano_4_text__text;
		this._pano_4_text.ggId="pano_4_text";
		this._pano_4_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_4_text.ggVisible=true;
		this._pano_4_text.className='ggskin ggskin_text';
		this._pano_4_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_4_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_4_text__text.setAttribute('style',hs);
		this._pano_4_text.ggTextDiv.innerHTML="circula\xe7\xe3o<br\/>";
		this._pano_4_text.appendChild(this._pano_4_text__text);
		this._pano_4_button.appendChild(this._pano_4_text);
		this._menu_bg.appendChild(this._pano_4_button);
		this._pano_5_button=document.createElement('div');
		this._pano_5_button.ggId="pano_5_button";
		this._pano_5_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_5_button.ggVisible=true;
		this._pano_5_button.className='ggskin ggskin_rectangle';
		this._pano_5_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  117px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_5_button.setAttribute('style',hs);
		this._pano_5_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=118;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_suitecasal.onclick();
		}
		this._pano_5_text=document.createElement('div');
		this._pano_5_text__text=document.createElement('div');
		this._pano_5_text.className='ggskin ggskin_textdiv';
		this._pano_5_text.ggTextDiv=this._pano_5_text__text;
		this._pano_5_text.ggId="pano_5_text";
		this._pano_5_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_5_text.ggVisible=true;
		this._pano_5_text.className='ggskin ggskin_text';
		this._pano_5_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_5_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_5_text__text.setAttribute('style',hs);
		this._pano_5_text.ggTextDiv.innerHTML="su\xedte casal<br\/>";
		this._pano_5_text.appendChild(this._pano_5_text__text);
		this._pano_5_button.appendChild(this._pano_5_text);
		this._menu_bg.appendChild(this._pano_5_button);
		this._pano_6_button=document.createElement('div');
		this._pano_6_button.ggId="pano_6_button";
		this._pano_6_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_6_button.ggVisible=true;
		this._pano_6_button.className='ggskin ggskin_rectangle';
		this._pano_6_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  144px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._pano_6_button.setAttribute('style',hs);
		this._pano_6_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=145;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_banhocasal.onclick();
		}
		this._pano_6_text=document.createElement('div');
		this._pano_6_text__text=document.createElement('div');
		this._pano_6_text.className='ggskin ggskin_textdiv';
		this._pano_6_text.ggTextDiv=this._pano_6_text__text;
		this._pano_6_text.ggId="pano_6_text";
		this._pano_6_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_6_text.ggVisible=true;
		this._pano_6_text.className='ggskin ggskin_text';
		this._pano_6_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_6_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_6_text__text.setAttribute('style',hs);
		this._pano_6_text.ggTextDiv.innerHTML="banho casal";
		this._pano_6_text.appendChild(this._pano_6_text__text);
		this._pano_6_button.appendChild(this._pano_6_text);
		this._menu_bg.appendChild(this._pano_6_button);
		this._pano_7_button=document.createElement('div');
		this._pano_7_button.ggId="pano_7_button";
		this._pano_7_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_7_button.ggVisible=true;
		this._pano_7_button.className='ggskin ggskin_rectangle';
		this._pano_7_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  172px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_7_button.setAttribute('style',hs);
		this._pano_7_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=173;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_suitemenina.onclick();
		}
		this._pano_7_text=document.createElement('div');
		this._pano_7_text__text=document.createElement('div');
		this._pano_7_text.className='ggskin ggskin_textdiv';
		this._pano_7_text.ggTextDiv=this._pano_7_text__text;
		this._pano_7_text.ggId="pano_7_text";
		this._pano_7_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_7_text.ggVisible=true;
		this._pano_7_text.className='ggskin ggskin_text';
		this._pano_7_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_7_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_7_text__text.setAttribute('style',hs);
		this._pano_7_text.ggTextDiv.innerHTML="su\xedte menina";
		this._pano_7_text.appendChild(this._pano_7_text__text);
		this._pano_7_button.appendChild(this._pano_7_text);
		this._menu_bg.appendChild(this._pano_7_button);
		this._pano_8_button=document.createElement('div');
		this._pano_8_button.ggId="pano_8_button";
		this._pano_8_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_8_button.ggVisible=true;
		this._pano_8_button.className='ggskin ggskin_rectangle';
		this._pano_8_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  201px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_8_button.setAttribute('style',hs);
		this._pano_8_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=202;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_suitemenino.onclick();
		}
		this._pano_8_text=document.createElement('div');
		this._pano_8_text__text=document.createElement('div');
		this._pano_8_text.className='ggskin ggskin_textdiv';
		this._pano_8_text.ggTextDiv=this._pano_8_text__text;
		this._pano_8_text.ggId="pano_8_text";
		this._pano_8_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_8_text.ggVisible=true;
		this._pano_8_text.className='ggskin ggskin_text';
		this._pano_8_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_8_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_8_text__text.setAttribute('style',hs);
		this._pano_8_text.ggTextDiv.innerHTML="su\xedte menino";
		this._pano_8_text.appendChild(this._pano_8_text__text);
		this._pano_8_button.appendChild(this._pano_8_text);
		this._menu_bg.appendChild(this._pano_8_button);
		this._pano_9_button=document.createElement('div');
		this._pano_9_button.ggId="pano_9_button";
		this._pano_9_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_9_button.ggVisible=true;
		this._pano_9_button.className='ggskin ggskin_rectangle';
		this._pano_9_button.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  232px;';
		hs+='width: 152px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		this._pano_9_button.setAttribute('style',hs);
		this._pano_9_button.onclick=function () {
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=233;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._abre_banhoamericano.onclick();
		}
		this._pano_9_text=document.createElement('div');
		this._pano_9_text__text=document.createElement('div');
		this._pano_9_text.className='ggskin ggskin_textdiv';
		this._pano_9_text.ggTextDiv=this._pano_9_text__text;
		this._pano_9_text.ggId="pano_9_text";
		this._pano_9_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_9_text.ggVisible=true;
		this._pano_9_text.className='ggskin ggskin_text';
		this._pano_9_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._pano_9_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_9_text__text.setAttribute('style',hs);
		this._pano_9_text.ggTextDiv.innerHTML="banho americano";
		this._pano_9_text.appendChild(this._pano_9_text__text);
		this._pano_9_button.appendChild(this._pano_9_text);
		this._menu_bg.appendChild(this._pano_9_button);
		this._cap=document.createElement('div');
		this._cap.ggId="cap";
		this._cap.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cap.ggVisible=true;
		this._cap.className='ggskin ggskin_rectangle';
		this._cap.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 145px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.0392157);';
		hs+='border: 0px solid #000000;';
		this._cap.setAttribute('style',hs);
		this._menu_bg.appendChild(this._cap);
		this._meni_mask.appendChild(this._menu_bg);
		this._atual_bg=document.createElement('div');
		this._atual_bg.ggId="atual_bg";
		this._atual_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atual_bg.ggVisible=false;
		this._atual_bg.className='ggskin ggskin_rectangle';
		this._atual_bg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  8px;';
		hs+='width: 186px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.392157);';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		this._atual_bg.setAttribute('style',hs);
		this._atual_bg.onclick=function () {
			flag=(me._atual_bg.style.visibility=='hidden');
			me._atual_bg.style[domTransition]='none';
			me._atual_bg.style.visibility=flag?'inherit':'hidden';
			me._atual_bg.ggVisible=flag;
			flag=(me._menu_bg.style.visibility=='hidden');
			me._menu_bg.style[domTransition]='none';
			me._menu_bg.style.visibility=flag?'inherit':'hidden';
			me._menu_bg.ggVisible=flag;
		}
		this._menu_down=document.createElement('div');
		this._menu_down.ggId="menu_down";
		this._menu_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_down.ggVisible=true;
		this._menu_down.className='ggskin ggskin_svg';
		this._menu_down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  -2px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._menu_down.setAttribute('style',hs);
		this._menu_down__img=document.createElement('img');
		this._menu_down__img.className='ggskin ggskin_svg';
		this._menu_down__img.setAttribute('src',basePath + 'html5/control/menu_down.png');
		this._menu_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._menu_down__img['ondragstart']=function() { return false; };
		this._menu_down.appendChild(this._menu_down__img);
		this._atual_bg.appendChild(this._menu_down);
		this._pano_atual_text=document.createElement('div');
		this._pano_atual_text__text=document.createElement('div');
		this._pano_atual_text.className='ggskin ggskin_textdiv';
		this._pano_atual_text.ggTextDiv=this._pano_atual_text__text;
		this._pano_atual_text.ggId="pano_atual_text";
		this._pano_atual_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_atual_text.ggVisible=true;
		this._pano_atual_text.className='ggskin ggskin_text';
		this._pano_atual_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 34px;';
		hs+='top:  6px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._pano_atual_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._pano_atual_text__text.setAttribute('style',hs);
		this._pano_atual_text.ggTextDiv.innerHTML="sala de estar<br\/>";
		this._pano_atual_text.appendChild(this._pano_atual_text__text);
		this._atual_bg.appendChild(this._pano_atual_text);
		this._meni_mask.appendChild(this._atual_bg);
		this.divSkin.appendChild(this._meni_mask);
		this._acoes_abre=document.createElement('div');
		this._acoes_abre.ggId="Acoes Abre";
		this._acoes_abre.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._acoes_abre.ggVisible=true;
		this._acoes_abre.className='ggskin ggskin_container';
		this._acoes_abre.ggType='container';
		hs ='position:absolute;';
		hs+='left: 241px;';
		hs+='top:  6px;';
		hs+='width: 36px;';
		hs+='height: 29px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._acoes_abre.setAttribute('style',hs);
		this._abre_estar=document.createElement('div');
		this._abre_estar.ggId="abre_estar";
		this._abre_estar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_estar.ggVisible=false;
		this._abre_estar.className='ggskin ggskin_container';
		this._abre_estar.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_estar.setAttribute('style',hs);
		this._abre_estar.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=134;me._fundo_select.ggParameter.ry=243;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=7;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="sala de estar";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="sala de estar";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node8}","");
		}
		this._acoes_abre.appendChild(this._abre_estar);
		this._abre_varanda=document.createElement('div');
		this._abre_varanda.ggId="abre_varanda";
		this._abre_varanda.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_varanda.ggVisible=false;
		this._abre_varanda.className='ggskin ggskin_container';
		this._abre_varanda.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_varanda.setAttribute('style',hs);
		this._abre_varanda.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=93;me._fundo_select.ggParameter.ry=37;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=35;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="varanda";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="varanda";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node9}","");
		}
		this._acoes_abre.appendChild(this._abre_varanda);
		this._abre_cozinha=document.createElement('div');
		this._abre_cozinha.ggId="abre_cozinha";
		this._abre_cozinha.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_cozinha.ggVisible=false;
		this._abre_cozinha.className='ggskin ggskin_container';
		this._abre_cozinha.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_cozinha.setAttribute('style',hs);
		this._abre_cozinha.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=49;me._fundo_select.ggParameter.ry=156;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=64;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="cozinha";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="cozinha";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node4}","");
		}
		this._acoes_abre.appendChild(this._abre_cozinha);
		this._abre_circulacao=document.createElement('div');
		this._abre_circulacao.ggId="abre_circulacao";
		this._abre_circulacao.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_circulacao.ggVisible=false;
		this._abre_circulacao.className='ggskin ggskin_container';
		this._abre_circulacao.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_circulacao.setAttribute('style',hs);
		this._abre_circulacao.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=0;me._fundo_select.ggParameter.ry=0;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=91;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="circula\xe7\xe3o";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="circula\xe7\xe3o";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node3}","");
		}
		this._acoes_abre.appendChild(this._abre_circulacao);
		this._abre_suitecasal=document.createElement('div');
		this._abre_suitecasal.ggId="abre_suitecasal";
		this._abre_suitecasal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_suitecasal.ggVisible=false;
		this._abre_suitecasal.className='ggskin ggskin_container';
		this._abre_suitecasal.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_suitecasal.setAttribute('style',hs);
		this._abre_suitecasal.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=242;me._fundo_select.ggParameter.ry=279;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=118;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="su\xedte casal";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="su\xedte casal";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node5}","");
		}
		this._acoes_abre.appendChild(this._abre_suitecasal);
		this._abre_banhocasal=document.createElement('div');
		this._abre_banhocasal.ggId="abre_banhocasal";
		this._abre_banhocasal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_banhocasal.ggVisible=false;
		this._abre_banhocasal.className='ggskin ggskin_container';
		this._abre_banhocasal.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_banhocasal.setAttribute('style',hs);
		this._abre_banhocasal.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=383;me._fundo_select.ggParameter.ry=266;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=145;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="banho casal";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="banho casal";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node2}","");
		}
		this._acoes_abre.appendChild(this._abre_banhocasal);
		this._abre_suitemenina=document.createElement('div');
		this._abre_suitemenina.ggId="abre_suitemenina";
		this._abre_suitemenina.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_suitemenina.ggVisible=false;
		this._abre_suitemenina.className='ggskin ggskin_container';
		this._abre_suitemenina.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_suitemenina.setAttribute('style',hs);
		this._abre_suitemenina.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=390;me._fundo_select.ggParameter.ry=146;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=173;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="su\xedte menina";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="su\xedte menina";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node6}","");
		}
		this._acoes_abre.appendChild(this._abre_suitemenina);
		this._abre_suitemenino=document.createElement('div');
		this._abre_suitemenino.ggId="abre_suitemenino";
		this._abre_suitemenino.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_suitemenino.ggVisible=false;
		this._abre_suitemenino.className='ggskin ggskin_container';
		this._abre_suitemenino.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_suitemenino.setAttribute('style',hs);
		this._abre_suitemenino.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=256;me._fundo_select.ggParameter.ry=91;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=202;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="su\xedte menino";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="su\xedte menino";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node7}","");
		}
		this._acoes_abre.appendChild(this._abre_suitemenino);
		this._abre_banhoamericano=document.createElement('div');
		this._abre_banhoamericano.ggId="abre_banhoamericano";
		this._abre_banhoamericano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._abre_banhoamericano.ggVisible=false;
		this._abre_banhoamericano.className='ggskin ggskin_container';
		this._abre_banhoamericano.ggType='container';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  2px;';
		hs+='width: 50px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._abre_banhoamericano.setAttribute('style',hs);
		this._abre_banhoamericano.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._fundo_select.style[domTransition]='none';
			} else {
				me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fundo_select.ggParameter.rx=320;me._fundo_select.ggParameter.ry=136;
			me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
			var list=me.findElements("highlight|cap",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.ggParameter.rx=39;e.ggParameter.ry=233;
				e.style[domTransform]=parameterToTransform(e.ggParameter);
			}
			me._pano_atual_text.ggText="banho americano";
			me._pano_atual_text.ggTextDiv.innerHTML=me._pano_atual_text.ggText;
			if (me._pano_atual_text.ggUpdateText) {
				me._pano_atual_text.ggUpdateText=function() {
					var hs="banho americano";
					if (hs!=me._pano_atual_text.ggText) {
						me._pano_atual_text.ggText=hs;
						me._pano_atual_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me.player.openNext("{node1}","");
		}
		this._acoes_abre.appendChild(this._abre_banhoamericano);
		this.divSkin.appendChild(this._acoes_abre);
		this._informacoes=document.createElement('div');
		this._informacoes.ggId="informacoes";
		this._informacoes.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informacoes.ggVisible=true;
		this._informacoes.className='ggskin ggskin_image';
		this._informacoes.ggType='image';
		this._informacoes.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-154 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-147 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -154px;';
		hs+='top:  -147px;';
		hs+='width: 300px;';
		hs+='height: 300px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._informacoes.setAttribute('style',hs);
		this._informacoes__img=document.createElement('img');
		this._informacoes__img.className='ggskin ggskin_image';
		this._informacoes__img.setAttribute('src',basePath + 'html5/control/informacoes.png');
		this._informacoes__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._informacoes__img.className='ggskin ggskin_image';
		this._informacoes__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._informacoes__img);
		this._informacoes.appendChild(this._informacoes__img);
		this._informacoes.onclick=function () {
			flag=(me._informacoes.style.visibility=='hidden');
			me._informacoes.style[domTransition]='none';
			me._informacoes.style.visibility=flag?'inherit':'hidden';
			me._informacoes.ggVisible=flag;
		}
		this.divSkin.appendChild(this._informacoes);
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-195 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-69 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -195px;';
		hs+='top:  -69px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'html5/control/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'html5/control/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'html5/control/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'html5/control/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'html5/control/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'html5/control/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'html5/control/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'html5/control/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'html5/control/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'html5/control/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'html5/control/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'html5/control/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'html5/control/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'html5/control/zoomin__o.png';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'html5/control/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin.ggTextDiv.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'html5/control/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'html5/control/zoomout__o.png';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'html5/control/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout.ggTextDiv.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'html5/control/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'html5/control/autorotate__o.png';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'html5/control/autorotate.png';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		hs ='position:absolute;';
		hs+='left: -66px;';
		hs+='top:  35px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate.ggTextDiv.innerHTML="Inicia\/Para Autorota\xe7\xe3o";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'html5/control/info.png');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			flag=(me._informacoes.style.visibility=='hidden');
			me._informacoes.style[domTransition]='none';
			me._informacoes.style.visibility=flag?'inherit':'hidden';
			me._informacoes.ggVisible=flag;
		}
		this._info.onmouseover=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='inherit';
			me._tt_info.ggVisible=true;
			me._info__img.src=basePath + 'html5/control/info__o.png';
		}
		this._info.onmouseout=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._info__img.src=basePath + 'html5/control/info.png';
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text';
		this._tt_info.ggType='text';
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_info.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info.ggTextDiv.innerHTML="Mostra Informa\xe7\xf5es";
		this._tt_info.appendChild(this._tt_info__text);
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'html5/control/movemode.png');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=basePath + 'html5/control/movemode__o.png';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=basePath + 'html5/control/movemode.png';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode__text=document.createElement('div');
		this._tt_movemode.className='ggskin ggskin_textdiv';
		this._tt_movemode.ggTextDiv=this._tt_movemode__text;
		this._tt_movemode.ggId="tt_movemode";
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text';
		this._tt_movemode.ggType='text';
		hs ='position:absolute;';
		hs+='left: -66px;';
		hs+='top:  35px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode__text.setAttribute('style',hs);
		this._tt_movemode.ggTextDiv.innerHTML="Muda Modo de Controle";
		this._tt_movemode.appendChild(this._tt_movemode__text);
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'html5/control/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'html5/control/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'html5/control/fullscreen.png';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  35px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen.ggTextDiv.innerHTML="Fullscreen";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._logo1111=document.createElement('div');
		this._logo1111.ggId="logo1111";
		this._logo1111.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo1111.ggVisible=true;
		this._logo1111.className='ggskin ggskin_image';
		this._logo1111.ggType='image';
		this._logo1111.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-41 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-24 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -41px;';
		hs+='top:  -24px;';
		hs+='width: 32px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logo1111.setAttribute('style',hs);
		this._logo1111__img=document.createElement('img');
		this._logo1111__img.className='ggskin ggskin_image';
		this._logo1111__img.setAttribute('src',basePath + 'html5/control/logo1111.png');
		this._logo1111__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._logo1111__img.className='ggskin ggskin_image';
		this._logo1111__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logo1111__img);
		this._logo1111.appendChild(this._logo1111__img);
		this._logo1111.onclick=function () {
			me.player.openUrl("http:\/\/www.onzeonze.com.br\/","_blank");
		}
		this._logo1111.onmouseover=function () {
			me._link_site.style[domTransition]='none';
			me._link_site.style.visibility='inherit';
			me._link_site.ggVisible=true;
		}
		this._logo1111.onmouseout=function () {
			me._link_site.style[domTransition]='none';
			me._link_site.style.visibility='hidden';
			me._link_site.ggVisible=false;
		}
		this._link_site=document.createElement('div');
		this._link_site__text=document.createElement('div');
		this._link_site.className='ggskin ggskin_textdiv';
		this._link_site.ggTextDiv=this._link_site__text;
		this._link_site.ggId="link_site";
		this._link_site.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._link_site.ggVisible=false;
		this._link_site.className='ggskin ggskin_text';
		this._link_site.ggType='text';
		this._link_site.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (141-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -145px;';
		hs+='top:  -1px;';
		hs+='width: 141px;';
		hs+='height: 15px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._link_site.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._link_site__text.setAttribute('style',hs);
		this._link_site.ggTextDiv.innerHTML="www.onzeonze.com.br";
		this._link_site.appendChild(this._link_site__text);
		this._logo1111.appendChild(this._link_site);
		this.divSkin.appendChild(this._logo1111);
		this._imagem_82=document.createElement('div');
		this._imagem_82.ggId="Imagem 82";
		this._imagem_82.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagem_82.ggVisible=true;
		this._imagem_82.className='ggskin ggskin_image';
		this._imagem_82.ggType='image';
		this._imagem_82.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-125 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -125px;';
		hs+='top:  4px;';
		hs+='width: 250px;';
		hs+='height: 91px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._imagem_82.setAttribute('style',hs);
		this._imagem_82__img=document.createElement('img');
		this._imagem_82__img.className='ggskin ggskin_image';
		this._imagem_82__img.setAttribute('src',basePath + 'html5/control/imagem_82.png');
		this._imagem_82__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._imagem_82__img.className='ggskin ggskin_image';
		this._imagem_82__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._imagem_82__img);
		this._imagem_82.appendChild(this._imagem_82__img);
		this.divSkin.appendChild(this._imagem_82);
		this._quadro_84=document.createElement('div');
		this._quadro_84.ggId="Quadro 84";
		this._quadro_84.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._quadro_84.ggVisible=true;
		this._quadro_84.className='ggskin ggskin_container';
		this._quadro_84.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 320px;';
		hs+='height: 154px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._quadro_84.setAttribute('style',hs);
		this._texto_88=document.createElement('div');
		this._texto_88__text=document.createElement('div');
		this._texto_88.className='ggskin ggskin_textdiv';
		this._texto_88.ggTextDiv=this._texto_88__text;
		this._texto_88.ggId="Texto 88";
		this._texto_88.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._texto_88.ggVisible=true;
		this._texto_88.className='ggskin ggskin_text';
		this._texto_88.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  5px;';
		hs+='width: 187px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._texto_88.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 187px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._texto_88__text.setAttribute('style',hs);
		this._texto_88.ggTextDiv.innerHTML="Incorpora\xe7\xe3o e Constru\xe7\xe3o:";
		this._texto_88.appendChild(this._texto_88__text);
		this._quadro_84.appendChild(this._texto_88);
		this._imagem_85=document.createElement('div');
		this._imagem_85.ggId="Imagem 85";
		this._imagem_85.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagem_85.ggVisible=true;
		this._imagem_85.className='ggskin ggskin_image';
		this._imagem_85.ggType='image';
		hs ='position:absolute;';
		hs+='left: 8px;';
		hs+='top:  29px;';
		hs+='width: 150px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._imagem_85.setAttribute('style',hs);
		this._imagem_85__img=document.createElement('img');
		this._imagem_85__img.className='ggskin ggskin_image';
		this._imagem_85__img.setAttribute('src',basePath + 'html5/control/imagem_85.png');
		this._imagem_85__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._imagem_85__img.className='ggskin ggskin_image';
		this._imagem_85__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._imagem_85__img);
		this._imagem_85.appendChild(this._imagem_85__img);
		this._quadro_84.appendChild(this._imagem_85);
		this.divSkin.appendChild(this._quadro_84);
		if (me.player.transitionsDisabled) {
			me._fundo_select.style[domTransition]='none';
		} else {
			me._fundo_select.style[domTransition]='all 1000ms ease-out 0ms';
		}
		me._fundo_select.ggParameter.rx=134;me._fundo_select.ggParameter.ry=243;
		me._fundo_select.style[domTransform]=parameterToTransform(me._fundo_select.ggParameter);
		var list=me.findElements("highlight|cap",true);
		while(list.length>0) {
			var e=list.pop();
			e.style[domTransition]='none';
			e.ggParameter.rx=39;e.ggParameter.ry=7;
			e.style[domTransform]=parameterToTransform(e.ggParameter);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='lavabo') {
			me._img_lavabo.onclick();
		}
		if (id=='estar') {
			me._abre_estar.onclick();
		}
		if (id=='varanda') {
			me._abre_varanda.onclick();
		}
		if (id=='cozinha') {
			me._abre_cozinha.onclick();
		}
		if (id=='circulacao') {
			me._abre_circulacao.onclick();
		}
		if (id=='suitecasal') {
			me._abre_suitecasal.onclick();
		}
		if (id=='banhocasal') {
			me._abre_banhocasal.onclick();
		}
		if (id=='suitemenina') {
			me._abre_suitemenina.onclick();
		}
		if (id=='suitemenino') {
			me._abre_suitemenino.onclick();
		}
		if (id=='banhoamericano') {
			me._abre_banhoamericano.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='camera') {
			this.__div=document.createElement('div');
			this.__div.ggId="camera";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 198px;';
			hs+='top:  45px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='inherit';
				me._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='hidden';
				me._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage0=document.createElement('div');
			this._hsimage0.ggId="hsimage";
			this._hsimage0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage0.ggVisible=true;
			this._hsimage0.className='ggskin ggskin_image';
			this._hsimage0.ggType='image';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 37px;';
			hs+='height: 30px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage0.setAttribute('style',hs);
			this._hsimage0__img=document.createElement('img');
			this._hsimage0__img.className='ggskin ggskin_image';
			this._hsimage0__img.setAttribute('src',basePath + 'html5/control/hsimage0.png');
			this._hsimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage0__img.className='ggskin ggskin_image';
			this._hsimage0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage0__img);
			this._hsimage0.appendChild(this._hsimage0__img);
			this.__div.appendChild(this._hsimage0);
			this._hstext0=document.createElement('div');
			this._hstext0__text=document.createElement('div');
			this._hstext0.className='ggskin ggskin_textdiv';
			this._hstext0.ggTextDiv=this._hstext0__text;
			this._hstext0.ggId="hstext";
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=false;
			this._hstext0.className='ggskin ggskin_text';
			this._hstext0.ggType='text';
			this._hstext0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -33px;';
			hs+='top:  35px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext0__text.setAttribute('style',hs);
			this._hstext0.ggTextDiv.innerHTML=me.hotspot.title;
			this._hstext0.appendChild(this._hstext0__text);
			this.__div.appendChild(this._hstext0);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 340px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_image';
			this._hsimage.ggType='image';
			hs ='position:absolute;';
			hs+='left: -27px;';
			hs+='top:  -10px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_image';
			this._hsimage__img.setAttribute('src',basePath + 'html5/control/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage__img.className='ggskin ggskin_image';
			this._hsimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage__img);
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  40px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext.ggTextDiv.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};