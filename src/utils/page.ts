export const page_fun = {
    pageSize: 10,
    sortPosts: (a: any, b: any) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    getPagination: (count: number, size: number, current: number = 1, tpl: string = "/page/%num%/") => {
        const total = Math.ceil(count / size);
        const prevNum = current > 1 ? current - 1 : -1;
        const nextNum = current < total ? current + 1 : -1;
        const _link = (num: number) => {
            return tpl.replace("%num%", num.toString());
        };
        return {
            current: current,
            total: total,
            tpl: tpl,
            prev: {
                num: prevNum,
                link: prevNum > 0 ? _link(prevNum) : "",
            },
            next: {
                num: nextNum,
                link: nextNum > 0 ? _link(nextNum) : "",
            },
        };
    },
    countWords: (text: string) => {
        const words = text.match(/\b\w+\b/g);
        const wordCount = words ? words.length : 0;
        // 转换为以K为单位的格式
        const wordCountInK = (wordCount / 1000).toFixed(1) + 'K';
        return wordCountInK;
    },
    calculateTimeAgo: (date: Date) => {
        const now = new Date();
        const target = new Date(date);

        // 计算两个日期之间的时间差（以毫秒为单位）
        const timeDifference = now - target;

        // 将时间差转换为天和小时
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days > 0) {
            return `${days} 天前`;
        } else {
            return `${hours} 小时前`;
        }
    }
}