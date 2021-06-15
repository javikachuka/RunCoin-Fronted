export function transformSecondsToHumanMin (seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    if(d>0){
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        return dDisplay
    }
    var hDisplay = h > 0 ? h < 10 ? "0"+h + ":" : h + ":" : "00";
    var mDisplay = m > 0 ? m < 10 ? "0"+m +":" : m + ":" : "00";
    var sDisplay = s > 0 ? s < 10 ? "0"+s : s : "00";
    return  hDisplay + mDisplay + sDisplay;
}