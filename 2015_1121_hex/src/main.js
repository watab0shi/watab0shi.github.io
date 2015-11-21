var scroll,
    scrollTop = 0,
    canvas, ctx,
		cw, ch,
		hw, hh,
		mouseX = 0, mouseY = 0,
		HEX_NUM_ANGLES    = 6,
    HEX_COLS          = 11,
    HEX_RAWS          = 2,
		HEX_MAX_IN_RADIUS = 0.0,
		HEX_MAX_RADIUS    = 0.0,
		HEX_TARGET_RADIUS = new Array(),
		radius            = new Array(),
		queue             = null,
		wait              = 300;



window.onload = function(){
  // scroll = new IScroll( ".scrollWrapper", {
  //     scrollbars: true,
  //     useTransition: false,
  //     fadeScrollbars: true,
  //     bounce: false,
  //     click: true
  // } );

  scrollTop = $( document ).scrollTop();

  $( document ).scroll( function(){
    scrollTop = $( this ).scrollTop();
    // console.log( scrollTop );
  } );

  init();
};

function init(){
	canvas = document.getElementById( 'canvas' );

	if( !canvas || !canvas.getContext ){
		return false;
	}

	ctx = canvas.getContext( '2d' );

	// set canvas size
	setCanvasSize();

	// resize event
	window.addEventListener( 'resize', resize, false );
  // mouse event
	window.addEventListener( 'mousemove', mouseMove );

	// set draw function interval ( 60fps )
	setInterval( draw, 1000 / 30 );
}

function resize(){
	clearTimeout( queue );
	queue = setTimeout( function(){
		setCanvasSize();
	}, wait );
}

function setCanvasSize(){
	canvas.width   = window.innerWidth;
	canvas.height  = window.innerHeight;
	cw             = canvas.width;
	ch             = canvas.height;
	hw             = cw / 2;
	hh             = ch / 2;

  HEX_COLS          = ( cw > 800 ) ? 11: 6;
  HEX_MAX_IN_RADIUS = ( cw / HEX_COLS ) / 2;
  HEX_MAX_RADIUS    = HEX_MAX_IN_RADIUS / Math.cos( Math.PI / 6 );
  HEX_RAWS          = ( $( '.scroller' ).height() / ( HEX_MAX_RADIUS * 1.5 ) ) + 1;

  for( var i = 0; i < HEX_RAWS; ++i ){
    radius[ i ] = 0.0;
  }
}

function mouseMove( e ){
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function draw(){
  // radius += ( HEX_MAX_RADIUS - radius ) / 12;

	ctx.globalAlpha = 1.0;
	ctx.fillStyle   = "rgb( 255, 255, 255 )";
	ctx.fillRect( 0, 0, cw, ch );

	ctx.fillStyle   = "rgb( 240, 100, 100 )";
	ctx.strokeStyle = "rgb( 220, 220, 220 )";
  ctx.lineWidth   = 1.5;

  for( var y = 0; y < HEX_RAWS; ++y ){
    var isEven = ( y % 2 == 0 ) ? false: true;
    var cols   = ( isEven ) ? HEX_COLS: HEX_COLS + 1;
    var py     = -scrollTop + ( y * ( HEX_MAX_RADIUS * 1.5 ) );

    if( ( py >= -( HEX_MAX_RADIUS ) ) && ( py <= ch + ( HEX_MAX_RADIUS * 1.5 ) ) ){
      radius[ y ] += ( HEX_MAX_RADIUS - radius[ y ] ) / 12;
    }
    else{
      radius[ y ] += ( 0 - radius[ y ] ) / 12;
    }

    for( var x = 0; x < cols; ++x ){
      var px = ( isEven ) ? HEX_MAX_IN_RADIUS + ( x * ( HEX_MAX_IN_RADIUS * 2 ) ): ( x * ( HEX_MAX_IN_RADIUS * 2 ) );
      drawHexagon( px, py, radius[ y ] );
    }
  }
}

function drawHexagon( _x, _y, _r ){
  ctx.save();
  ctx.translate( _x, _y );
  drawHexPolygon( _r );
  ctx.fill();

  if( ctx.isPointInPath( mouseX, mouseY ) ){
  	ctx.globalAlpha = 0.2;
  	ctx.fillStyle   = "rgb( 200, 200, 200 )";
    ctx.fill();
  }

  ctx.stroke();
  ctx.restore();
}


function drawHexPolygon( _r ){
	var angle  = ( ( Math.PI * 2 ) / HEX_NUM_ANGLES );

	ctx.beginPath();
	for( var i = 0; i <= HEX_NUM_ANGLES; ++i ){
		var a = ( i + 0.5 ) * angle;
		var x = Math.cos( a ) * _r,
		    y = Math.sin( a ) * _r;

		if( i === 0 ){
			ctx.moveTo( x, y );
		}
		else{
			ctx.lineTo( x, y );
		}
	}
	ctx.closePath();
}
