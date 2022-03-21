class FreeTime {
    constructor (entertainment, timespend) {
        this.entertainment = entertainment;
        this.timespend = timespend;
    }
    getFreeTime () {
        if(this.entertainment) {
            return 'Yay I am Relax Baby!';
        }
        else {
            return 'Go For Work';
        }
    }
    spendTime () {
        if(this.timespend) {
           return this.getFreeTime()
        }
        else {
            return 'Time Out. Its time to go to work';
        }
    }
}
const SocialMedia = new FreeTime("Social Media", 60)
console.log(SocialMedia.getFreeTime())
console.log(SocialMedia.spendTime())