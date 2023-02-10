find . -name "*.mp3" -exec sh -c 'echo ffmpeg -i "$1" "${1%.mp3}.ogg"' sh {} \;
find . -name "*.mp3" -exec sh -c 'echo rm "$1"' sh {} \;

mp3 = 251.560 MB (266.3 MB on disk)
ogg = 217.955 MB (232.6 MB on disk)
