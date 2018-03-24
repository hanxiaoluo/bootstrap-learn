$().ready(function() {
    // 匹配密码，以字母开头，长度在6-20之间，必须包含字母数字。
    jQuery.validator.addMethod("isPwd", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9_]{6,20}$/.test(value);
    }, "密码长度在6-20之间,必须包含字母,只能包含字母、数字和下划线。");

    // 手机号码验证
    jQuery.validator.addMethod("isPhone", function(value, element) {
        var length = value.length;
        return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
    }, "请正确填写您的手机号码。");

    $("#sigin_form").validate({
        errorElement: 'span',
        errorClass: 'help-block',

        rules: {
            username: "required",
            password: {
                required: true,
                isPwd: true,
                minlength: 6
            },
            againpassword: {
                required: true,
                isPwd: true,
                minlength: 6,
                equalTo: "#password"
            },
            phone: {
                required: true,
                isPhone: true
            },
            email: {
                email: true,
                minlength: 10
            }
        },
        messages: {
            username: "请输入姓名",
            password: {
                required: "请输入密码",
                minlength: jQuery.format("密码不能小于{0}个字符")
            },
            againpassword: {
                required: "请输入确认密码",
                minlength: "确认密码不能小于6个字符",
                equalTo: "两次输入的密码不一致"
            },
            phone: {
                required: "请输入手机号码"
            },
            email: {
                required: "请输入Email地址",
                email: "请输入正确的email地址"
            }
        },

        //自定义错误消息放到哪里
        errorPlacement: function(error, element) {
            element.next().remove(); //删除显示图标
            element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
            element.closest('.form-inline').append(error); //显示错误消息提示
        },
        //给未通过验证的元素进行处理
        highlight: function(element) {
            $(element).closest('.form-inline').addClass('has-error has-feedback');
        },
        //验证通过的处理
        success: function(label) {
            var el = label.closest('.form-inline').find("input");
            el.next().remove(); //与errorPlacement相似
            el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-inline').removeClass('has-error').addClass("has-feedback has-success");
            label.remove();
        },
    });
});

$(function() {
    $("#returnLoginBtn").click(function() {
        console.log("返回按钮被点击");

    });
});