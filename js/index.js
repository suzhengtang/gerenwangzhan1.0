/**
 * Created by Administrator on 2017/7/13.
 */
window.onload = function () {
    //获取标签
    var address = document.getElementsByClassName('address')[0];
    var phone = address.children[0];
    var weixin = address.getElementsByClassName('weixin')[0];
    var alert = document.getElementsByClassName('alert')[0];

    //界面滚动显示联系方式效果
    window.onscroll = function () {
        var topT = document.body.scrollTop || document.documentElement.scrollTop;
        if(topT>=1){
            address.style.display = 'block';
        }
    };
    //添加点击加微信好友事件
    weixin.onclick = function () {
        alert.style.display = 'block';
    };
    document.onmousedown = function (event) {
        var event = event || window.event;
        var target = event.target ? event.target : event.srcElement;
        var targetId = target.id;
        if(targetId != ''){
            alert.style.display = 'none';
        }
    };

    //添加点击电话联系事件
    phone.onclick = function () {
        telephone();
    }
};
function telephone() {
    window.location.href = 'tel:13480187432';

}


