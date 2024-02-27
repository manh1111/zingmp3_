const { ZingMp3 } = require("zingmp3-api-full");

class SongService {
    async getSong(id) {
        try {
            if (!id) {
                return
            } else {
                const data = await ZingMp3.getSong(id);
                return data;
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async getSongInfo(id) {
        try {
            if (!id) {
                return
            } else {
                const data = await ZingMp3.getInfoSong(id);
                return data;
            }
        } catch (error) {
            console.error('Error :', error);
            throw error;
        }
    }

    async seachSong(query) {
        try {
            if (!query) {
                return
            } else {
                const data = await ZingMp3.search(query);
                return data;
            }
        } catch (error) {
            console.error('Error :', error);
            throw error;
        }
    }
}

module.exports = new SongService();
