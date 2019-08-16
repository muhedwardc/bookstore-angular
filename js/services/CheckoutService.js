app.service('checkoutService', function() {
    this.add = function(list) {
        var d = new Date();
        d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie =  "items=" + list + ";" + expires + ";path=/";
    }

    this.get = function() {
        var name = "items=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    this.remove = function() {
        document.cookie = "items= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    }

    var self = this
    this.addToCart = function(item) {
        var items = self.get()
        var newItem = true
        var list = []
        if (!items) {
            item.quantity = 1
            list.push(item)
        } else {
            list = JSON.parse(items)
            var existIndex = list.findIndex(function(i) {
                return i.judul == item.judul
            })
            if (existIndex == -1) {
                item.quantity = 1
                list.push(item)
            } else {
                list[existIndex].quantity += 1
                newItem = false
            }
        }
        
        self.add(JSON.stringify(list))
        return newItem
    }
})