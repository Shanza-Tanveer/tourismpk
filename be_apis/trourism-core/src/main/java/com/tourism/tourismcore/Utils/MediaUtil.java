package com.tourism.tourismcore.Utils;

public class MediaUtil {

    public static String getAssetUrl(String baseUrl, String url){
        if(url != null && url.startsWith("http")){
            return url;
        }
        if (baseUrl != null) {
            return baseUrl+"/"+url;
        }

        return url;
    }
}
