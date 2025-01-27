var Notifications;
(function (Notifications) {
    "use strict";
    Notifications.toastProviders = [
        //web = new WebNotificationService(),
        Notifications.toast = new Notifications.ToastrNotificationService(),
        Notifications.forms = new Notifications.CrmFormNotificationService(),
        Notifications.basic = new Notifications.DefaultNotifications()
    ];
    Notifications.providers = [
        Notifications.forms = new Notifications.CrmFormNotificationService(),
        Notifications.boostrap = new Notifications.BoostrapAlert(),
        Notifications.basic = new Notifications.DefaultNotifications()
    ];
    let provider;
    let toastProvider;
    function show(options) {
        console.log("Notifications.show()", options);
        if (!provider) {
            provider = resolve();
            provider.init();
        }
        provider.show(options || {
            message: ""
        });
    }
    Notifications.show = show;
    function hide(id) {
        if (!provider) {
            provider = resolve();
            provider.init();
        }
        provider.hide();
    }
    Notifications.hide = hide;
    function showToast(options) {
        console.log("Notifications.show()", options);
        if (!toastProvider) {
            toastProvider = resolveToast();
            toastProvider.init();
        }
        toastProvider.show(options || {
            message: ""
        });
    }
    Notifications.showToast = showToast;
    function hideToast(id) {
        if (!toastProvider) {
            toastProvider = resolve();
            toastProvider.init();
        }
        toastProvider.hide();
    }
    Notifications.hideToast = hideToast;
    function resolve() {
        for (let i = 0; i < Notifications.providers.length; i++) {
            let service = Notifications.providers[i];
            if (service && service.test()) {
                return service;
            }
        }
        throw new Error("Unable to resolve notification provider");
    }
    function resolveToast() {
        for (let i = 0; i < Notifications.toastProviders.length; i++) {
            let service = Notifications.toastProviders[i];
            if (service && service.test()) {
                return service;
            }
        }
        throw new Error("Unable to resolve notification provider");
    }
})(Notifications || (Notifications = {}));
