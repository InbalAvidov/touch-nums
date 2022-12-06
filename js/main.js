
var gCountClick=1
const gGameInOn =false
var gTimeInterval

function createNums(num) {
    var nums = []
    for (var i = 1; i <= num; i++) {
        nums.push(i)
    }
    console.log('nums:', nums)
    return nums
}

function onInit(num) {
    const nums = createNums(num)
    const boardSize = Math.sqrt(num)
    const elTimer = document.querySelector(".timer")
    elTimer.innerText = "timer:"
    clearInterval( gTimeInterval)
    gCountClick = 1
    renderBoard(nums,boardSize)
}



function renderBoard(nums,boardSize) {
    var numsCopy = shuffle(nums)
    var numsLength = numsCopy.length
    var strHTML = ''
    for (var i = 0; i < boardSize; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < boardSize; j++) {
            var num = numsCopy.pop()
            strHTML += `<td class = "cell" onclick ="cellClicked(this,${numsLength})" >${num}</td>`
        }
    }
    
    elTable = document.querySelector(".board")
    elTable.innerHTML = strHTML
}

function cellClicked(cell,num){
    console.log('nums:',num)
    var currNum = +cell.innerText
    if (gCountClick === currNum){
        if (gCountClick === 1) timer()
        gCountClick++
        cell.style.backgroundColor = "rgb(224, 92, 136)"
        if(gCountClick===num+1){
            const elTimer = document.querySelector(".timer")
            elTimer.innerText = "You Finished🏆press restart"
            clearInterval(gTimeInterval)
        }
    }
}

function timer(){
    const elTimer = document.querySelector(".timer")
    var start = Date.now()
    gTimeInterval = setInterval(() => {
        gSeconds = (Date.now() - start) / 1000
        elTimer.innerText = gSeconds.toFixed(2)
    }, 1)
}