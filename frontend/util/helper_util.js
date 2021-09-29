export const convertDuration = (totalSeconds) => {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds < 60) {
        return `0:${pad(totalSeconds)}`;
    } else {
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
    }
    
    if (minutes < 60) {
        return `${minutes}:${pad(seconds)}`
    } else {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }

    if (hours < 24) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
    } else {
        days = Math.floor(hours / 24);
        hours = hours % 24;
        return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

}

export const pad = (num) => {
    return (num < 10) ? ('0' + num) : num;
}