export const handleScroll = (hasMore: boolean, loading: boolean, fetchData: any) => {
    if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500 && hasMore && !loading) {
        return fetchData();
    }
};