/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
var AdvancedMediaPlayer = /** @class */ (function () {
    function AdvancedMediaPlayer() {
    }
    AdvancedMediaPlayer.prototype.playVlc = function (fileName) {
        console.log("Playing vlc file: ".concat(fileName));
    };
    AdvancedMediaPlayer.prototype.playMp4 = function (fileName) {
        console.log("Playing mp4 file: ".concat(fileName));
    };
    return AdvancedMediaPlayer;
}());
/**
 * The Adapter makes the AdvancedMediaPlayer's interface compatible with the
 * MediaPlayer's interface.
 */
var MediaAdapter = /** @class */ (function () {
    function MediaAdapter() {
        this.advancedMusicPlayer = new AdvancedMediaPlayer();
    }
    MediaAdapter.prototype.play = function (audioType, fileName) {
        if (audioType === "vlc") {
            this.advancedMusicPlayer.playVlc(fileName);
        }
        else if (audioType === "mp4") {
            this.advancedMusicPlayer.playMp4(fileName);
        }
    };
    return MediaAdapter;
}());
/**
 * The client code supports all classes that follow the MediaPlayer interface.
 */
function clientCode(mediaPlayer) {
    mediaPlayer.play("vlc", "movie.vlc");
    mediaPlayer.play("mp4", "movie.mp4");
}
console.log("Client: I can work just fine with the MediaPlayer objects:");
var mediaPlayer = new MediaAdapter();
clientCode(mediaPlayer);
//# sourceMappingURL=adapter.js.map