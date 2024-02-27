const { ZingMp3 } = require("zingmp3-api-full");

class HomeService {
    async getHome() {
        try {
            const data = await ZingMp3.getHome();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

module.exports = new HomeService();
