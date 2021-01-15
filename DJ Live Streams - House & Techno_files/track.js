var token = document.getElementById("mentioned-by-script").getAttribute("token");
if (!token) {
    token = document.getElementById("mentioned-by-script").getAttribute("data-verification");
}

var host_el = document.getElementById("mentioned-by-script");
var host = host_el ? host_el.getAttribute("host"): null;

var referrer = document.referrer;
var origin = location.origin;
var referrer_host = referrer.split('/')[2]

var origin_host = origin.split('/')[2]

function from_subdomain(ref, orig) {
    var refLength = ref.length;
    var origLength = orig.length;

    if (refLength < origLength) {
        return false;
    }
    if (ref === orig) {
        return true;
    }
    if (ref.endsWith(orig) && ref[refLength-origLength-1] === '.') {
        return true;
    }
    return false;
}

if (
    !referrer ||
    !origin ||
    (host && !from_subdomain(origin_host, host)) ||
    (host && from_subdomain(referrer_host, host)) ||
    from_subdomain(referrer_host, origin_host)
) { } else {

req=new XMLHttpRequest();
req.open("GET",'https://t.mentioned.app/api/ignored-domains/'  + token,true);
req.send();

var refer_domain_split = referrer.split('/')[2].split(".");
var domainLength = refer_domain_split.length;

req.onload=function(){
    var jsonResponse = json=JSON.parse(req.responseText);

    var arrayLength = jsonResponse.length;
    for (var i = 0; i < arrayLength; i++) {
        var rule = jsonResponse[i].split(".");
        var ruleLength =  rule.length

        var d_r_d1 = ruleLength > domainLength ? ruleLength - domainLength : 0
        var d_r_d2 = domainLength > ruleLength ? domainLength - ruleLength : 0

        var match = true;
        for (var j = Math.min(domainLength, ruleLength) -1; j >= 0; j--) {

            var current_rule_part = rule[j + d_r_d1];
            var current_domain_part = refer_domain_split[j + d_r_d2];
            if (current_rule_part !== '*') {
                if (current_domain_part !== current_rule_part) {
                    match = false
                    break
                }
            }
        }
        var match_by_inner = match && ruleLength <= domainLength;
        var match_by_outer = match && ruleLength > domainLength && rule[ruleLength - domainLength - 1] === '*';
        if (match_by_inner || match_by_outer) return;

    }


    var json_data = {"referer":referrer, "origin": origin};
    var xmlhttp = new XMLHttpRequest();
    var url = 'https://t.mentioned.app/api/track/' + token;
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(json_data));
};


}