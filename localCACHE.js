function localCACHE(accion,key,data){
	var CACHE = window["localStorage"];
	try {
		switch(accion){
			case "save":
				CACHE.setItem(key,data);
				return true;
				break;
			case "load":
				return CACHE.getItem(key);
				break;
			case "del":
				CACHE.removeItem(key);
				return true;
				break;
			case "tojson":
				CACHE.setItem(key,JSON.stringify(data));
				return true;
				break;
			case "parse":
				var temp = CACHE.getItem(key);
				return JSON.parse(temp);
				break;
		}
	} catch(e){
		return false;
	}
}
