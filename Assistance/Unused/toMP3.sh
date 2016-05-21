find . -iname "*.wav" -exec bash -c 'mv "$0" "${0%\.wav}.mp3"' {} \;
