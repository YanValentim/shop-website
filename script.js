var women = document.getElementById("women-h")
var men = document.getElementById("men-h")
var shoes = document.getElementById("shoes-h")
var brand = document.getElementById("brand-h")
var womentx = document.getElementById("womentx")
var mentx = document.getElementById('mentx')

var tshirtsC = document.getElementById("t-shirts")
var jacketC = document.getElementById("jacket")
var shoesC = document.getElementById("shoes")
var brandC = document.getElementById("brand")


women.addEventListener('click', clicar)
men.addEventListener('click', clicar)
shoes.addEventListener('click', clicar)
brand.addEventListener('click', clicar)



var nav = document.getElementsByName('nav')

function clicar(){
    if(nav[0].checked){
        
        
        womentx.style.transition = '1s'
        womentx.style.color = 'rgb(255, 131, 49)'
        womentx.style.fontSize = '16px'

        tshirtsC.style.transition = '5s opacity, 7s transform'
        tshirtsC.style.opacity = '1'
        tshirtsC.style.transform = 'translate(100px, 100px)'

        //tirando efeitos men principal
        jacketC.style.transform = 'translate(-100px, -130px)'
        jacketC.style.opacity = '0'

        shoesC.style.transform = 'translate(-100px, -200px)'
        shoesC.style.opacity = '0'

        brandC.style.transform = 'translate(-100px, -280px)'
        brandC.style.opacity = '0'

        //tirando efeitos men texto
        mentx.style.fontSize = '12px'
        mentx.style.color = 'rgb(104, 102, 102)'

        shoestx.style.fontSize = '12px'
        shoestx.style.color = 'rgb(104, 102, 102)'
       
        brandtx.style.fontSize = '12px'
        brandtx.style.color = 'rgb(104, 102, 102)'
        

        
    }
    else if(nav[1].checked){
        mentx.style.transition = '1s'
        mentx.style.color = 'rgb(255, 131, 49)'
        mentx.style.fontSize = '16px'

        jacketC.style.transition = '5s opacity, 7s transform'
        jacketC.style.opacity = '1'
        jacketC.style.transform = 'translate(100px, -130px)'
        
        //tirando efeitos women principal

        tshirtsC.style.transform = 'translate(0px, 100px)'
        tshirtsC.style.opacity = '0'

        shoesC.style.transform = 'translate(-100px, -200px)'
        shoesC.style.opacity = '0'

        brandC.style.transform = 'translate(-200px, -280px)'
        brandC.style.opacity = '0'


        //tirando efeitos men texto

        womentx.style.fontSize = '12px'
        womentx.style.color = 'rgb(104, 102, 102)'

        shoestx.style.fontSize = '12px'
        shoestx.style.color = 'rgb(104, 102, 102)'
        
        brandtx.style.fontSize = '12px'
        brandtx.style.color = 'rgb(104, 102, 102)'

    }

    else if(nav[2].checked){
        shoestx.style.transition = '1s'
        shoestx.style.color = 'rgb(255, 131, 49)'
        shoestx.style.fontSize = '16px'

        shoesC.style.transition = '5s opacity, 7s transform'
        shoesC.style.opacity = '1'
        shoesC.style.transform = 'translate(100px, -200px)'

        //tirando efeitos men principal
        jacketC.style.transform = 'translate(-100px, -130px)'
        jacketC.style.opacity = '0'

        tshirtsC.style.transform = 'translate(0px, 100px)'
        tshirtsC.style.opacity = '0'

        brandC.style.transform = 'translate(-200px, -280px)'
        brandC.style.opacity = '0'
        
        //tirando efeitos men texto
        mentx.style.fontSize = '12px'
        mentx.style.color = 'rgb(104, 102, 102)'

        womentx.style.fontSize = '12px'
        womentx.style.color = 'rgb(104, 102, 102)'

        brandtx.style.fontSize = '12px'
        brandtx.style.color = 'rgb(104, 102, 102)'


        

    }

    else if(nav[3].checked){
        brandtx.style.transition = '1s'
        brandtx.style.color = 'rgb(255, 131, 49)'
        brandtx.style.fontSize = '16px'

        brandC.style.transition = '5s opacity, 7s transform'
        brandC.style.opacity = '1'
        brandC.style.transform = 'translate(100px, -280px)'

         //tirando efeitos men principal
         jacketC.style.transform = 'translate(-100px, -130px)'
         jacketC.style.opacity = '0'
 
         tshirtsC.style.transform = 'translate(0px, 100px)'
         tshirtsC.style.opacity = '0'

         shoesC.style.transform = 'translate(-100px, -200px)'
         shoesC.style.opacity = '0'
         
         //tirando efeitos men texto
         mentx.style.fontSize = '12px'
         mentx.style.color = 'rgb(104, 102, 102)'
 
         womentx.style.fontSize = '12px'
         womentx.style.color = 'rgb(104, 102, 102)'

         shoestx.style.fontSize = '12px'
         shoestx.style.color = 'rgb(104, 102, 102)'
    }
}
