$('.navbar').on('click','.nav-list>li',(e)=>{
    let $li = $(e.currentTarget)
    $li.addClass('active').siblings().removeClass('active')
    let index = $li.index()
    $('.content_wrapper>div').eq(index).addClass('active').siblings().removeClass('active')
})
