
function timer() {
    let browserCount = document.getElementById('counter')
    
    let initialNumber = 0
    document.getElementById('plus').addEventListener('click', function() {
        initialNumber++
        browserCount.textContent = initialNumber
    })
    document.getElementById('minus').addEventListener('click', function() {
        initialNumber--
        browserCount.textContent = initialNumber
    })

    let counter = setInterval(addOne, 1000)
    function addOne() {        
        initialNumber++
        browserCount.textContent = initialNumber
            
        if (initialNumber === 3600) {
            clearInterval(counter)    
        }
    }

    document.getElementById('heart').addEventListener('click', function() {
        let list = document.createElement('li')
        document.getElementById('like-space').append(list)
        list.textContent = `${initialNumber} was liked 1 time`
    })
    
    let pauseButton = document.getElementById('pause')
    if(pauseButton.textContent = 'pause') {
    pauseButton.addEventListener('click', function() {
        clearInterval(counter)
        pauseButton.textContent = 'resume'
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        document.getElementById('submit').disabled = true
    })
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('comment-form').addEventListener('submit', function(e) {
            e.preventDefault()
            
            let commentText = document.getElementById('comment-input').value
            let list2 = document.createElement('li')
            document.getElementById('comments').append(list2)
            list2.textContent = commentText
    })
    })

    /*
    if(pauseButton.textContent = 'resume') {
    pauseButton.addEventListener('click', function() {
            let counter = setInterval(addOne, 1000)
            function addOne2() {        
                initialNumber++
                browserCount.textContent = initialNumber
            
                if (initialNumber === 20) {
                    clearInterval(counter)    
                }
            }
        })
    }
    */
}

timer()
