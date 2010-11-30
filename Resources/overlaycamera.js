var win = Titanium.UI.currentWindow;

var imageChara = Titanium.UI.createImageView({image:'image/image0Small.png'});
var b1 = Titanium.UI.createButton({
  left:8,
  bottom:10,
  height:40,
  width:80,
  title:'戻る'
});
var b2 = Titanium.UI.createButton({
  left:100,
  bottom:10,
  height:40,
  width:80,
  title:'シャッター'
});
var b3 = Titanium.UI.createButton({
  left:200,
  bottom:10,
  height:40,
  width:80,
  title:'誰'
});
var sheet = Titanium.UI.createOptionDialog({
  title: 'だれ',
  options: ['えば','しんじ']
});

var overlay = Titanium.UI.createView();
overlay.add(imageChara);
overlay.add(b1);
overlay.add(b2);
overlay.add(b3);

//win.add(overlay);

b2.addEventListener('click',function()
{
  Ti.Media.hideCamera();
  nav.close();
});
b2.addEventListener('click',function()
{
  Ti.Media.takePicture();
});
b3.addEventListener('click',function()
{
  sheet.show();
});

sheet.addEventListener('click',function(e)
{
  if(e.index == 0) {
    imageChara.image = 'image/image0Small.png';
  }else{
    imageChara.image = 'image/image1Small.png';
  }  
});


Titanium.Media.showCamera({

  success:function(event)
  {
/*
    var camera_img = event.media;
    var maskedimage = Ti.UI.createMaskedImage({
      mask:imageChara.iamge,
      image:camera_img.image,
      mode:Titanium.UI.BLEND_MODE_DESTINATION_IN
    });
    Titanium.Media.saveToPhotoGallery(maskedimage);
*/
    var imageView = Ti.UI.createImageView({
      image:event.media,
      width:win.width,
      height:win.height
    });
    win.add(imageView);

    Ti.Media.hideCamera();
  },
  cancel:function()
  {
  },
  error:function(error)
  {
    var a = Titanium.UI.createAlertDialog({title:'Camera'});
    if (error.code == Titanium.Media.NO_CAMERA)
    {
      a.setMessage('Please run this test on device');
    }
    else
    {
      a.setMessage('Unexpected error: ' + error.code);
    }
    a.show();
  },
  overlay:overlay,
  showControls:false,
  mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO,
  autohide:false
  //saveToPhotoGallery:true,
  //allowEditing:true
});

