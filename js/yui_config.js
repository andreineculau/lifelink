// JavaScript Document

if (YAHOO.widget)
{
	if (YAHOO.widget.Overlay)
	{
		YAHOO.widget.Overlay.prototype.center = function() {
			var elementWidth = this.element.offsetWidth;
			var elementHeight = this.element.offsetHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			var viewPortWidth = YAHOO.util.Dom.getViewportWidth();
			var viewPortHeight = YAHOO.util.Dom.getViewportHeight();
		
			if (!this.targetElement) {
				var x = (viewPortWidth / 2) - (elementWidth / 2) + scrollX;
				var y = (viewPortHeight / 2) - (elementHeight / 2) + scrollY;
			}
			else {
				var cover = this.targetElement;
				var coverXY = YAHOO.util.Dom.getXY(cover);
				var coverWidth = YAHOO.util.Dom.get(cover).offsetWidth;
				var coverHeight = YAHOO.util.Dom.get(cover).offsetHeight;
				var x1 = Math.max(scrollX, coverXY[0]);
				var y1 = Math.max(scrollY, coverXY[1]);
				var x2 = Math.min(scrollX+viewPortWidth, coverXY[0]+coverWidth);
				var y2 = Math.min(scrollY+viewPortHeight, coverXY[1]+coverHeight);
				var x = (x2-x1-elementWidth) / 2 + x1;
				var y = (y2-y1-elementHeight) / 2 + y1;
				x = Math.max(scrollX, x);
				y = Math.max(scrollY, y);
			}
			this.element.style.left = parseInt(x, 10) + "px";
			this.element.style.top = parseInt(y, 10) + "px";
			this.syncPosition();
		
			this.cfg.refireEvent("iframe");
		};
	}
	
	if (YAHOO.widget.Panel)
	{
		YAHOO.widget.Panel.prototype.sizeMask = function() {
			if (this.mask) {
				if (!this.targetElement) {
					YAHOO.util.Dom.setStyle(this.mask, 'height', YAHOO.util.Dom.getDocumentHeight());
					YAHOO.util.Dom.setStyle(this.mask, 'width', YAHOO.util.Dom.getDocumentWidth());
				} else {
					var cover = this.targetElement;
					var xy = YAHOO.util.Dom.getXY(cover);
					var coverWidth = YAHOO.util.Dom.get(cover).offsetWidth;
					var coverHeight = YAHOO.util.Dom.get(cover).offsetHeight;
					YAHOO.util.Dom.setStyle(this.mask, 'height', coverHeight);
					YAHOO.util.Dom.setStyle(this.mask, 'width', coverWidth);
					YAHOO.util.Dom.setXY(this.mask, xy);
				}
			}
		};
		
		/* attach panel to div, not just document.body */
		function fixMask() {
			if (this.mask) {
				if (this.targetElement)
				{
					var cover = this.targetElement;
				}
				else {
					var cover = this.element.parentNode.id;
				}
				var xy = YAHOO.util.Dom.getXY(cover);
				this.mask.style.height = YAHOO.util.Dom.get(cover).offsetHeight + 'px';
				this.mask.style.width = YAHOO.util.Dom.get(cover).offsetWidth + 'px';
				YAHOO.util.Dom.setXY(this.mask, xy);
			}
		}
		
		/* panel to top-left: 0px, 0px */
		function fixHide() {
			this.cfg.setProperty('x', 0);
			this.cfg.setProperty('y', 0);
		}
	}
}

YAHOO.namespace('ext');
if (typeof Ext == "undefined") {
	Ext=YAHOO.ext;
}