function shoes (name,img,size,stock,price,link) {
	this.name = name
	this.img = img
	this.size = size
	this.stock = stock
	this.price = price
	this.link = link
}

var airJordan = new shoes('AIR JORDAN 5 RETRO','img/jordan.png','10,11,12,13',30,'$190',"http://store.nike.com/us/en_us/pd/air-jordan-5-retro-mens-shoe/pid-11046541/pgid-10264742")
var airJordan1 = new shoes('AIR JORDAN XXXI','img/jordan1.png','10,11,12,13',10,'$185',"http://store.nike.com/us/en_us/pd/air-jordan-xxxi-mens-basketball-shoe/pid-11189233/pgid-11522191")
var airJordan2 = new shoes('JORDAN WINTER','img/jordan2.png','10,11,12,13',28,'$125',"http://store.nike.com/us/en_us/pd/jordan-trainer-st-winter-mens-training-shoe/pid-11157359/pgid-11832257")
var airJordan3 = new shoes('JORDAN TRUE FLIGHT','img/jordan3.png','10,11,12,13',12,'$130',"http://store.nike.com/us/en_us/pd/jordan-true-flight-mens-basketball-shoe/pid-11161489/pgid-11832317")
var jhund = new shoes('JORDAN HORIZON LOW','img/jordan4.png','10,11,12,13',7,'$135',"http://store.nike.com/us/en_us/pd/jordan-horizon-low-mens-shoe/pid-11156821/pgid-11832303")
var raman = new shoes('JORDAN REVEAL','img/jordan5.png','10,11,12,13',4,'$85',"http://store.nike.com/us/en_us/pd/jordan-reveal-35y-7y-big-kids-shoe/pid-11171947/pgid-11067463")

var shoesArray = new Array 

shoesArray.push(jhund,airJordan,airJordan1,airJordan2,airJordan3,raman)

for (var i = 0; i < shoesArray.length; i++) {
	var div = document.createElement('div')
    var nameH1 = document.createElement('h3')
    var img = document.createElement('img')
    var size = document.createElement('h4')
    var stock = document.createElement('h4')
    var price = document.createElement('h4')
    var button = document.createElement('a')
    var jName = document.createTextNode(shoesArray[i].name)
    var jSize = document.createTextNode('Available size: ' + shoesArray[i].size)
    var jStock = document.createTextNode('In stock: ' + shoesArray[i].stock)
    var jPrice = document.createTextNode(shoesArray[i].price)
    var jButton = document.createTextNode('Buy Now!')
    img.src = shoesArray[i].img
    button.href = shoesArray[i].link
    img.className = 'img-responsive'
    div.className = 'col-sm-3'
    button.className = 'jhund'
    nameH1.appendChild(jName)
    size.appendChild(jSize)
    stock.appendChild(jStock)
    price.appendChild(jPrice)
    button.appendChild(jButton)
    div.appendChild(nameH1)
    div.appendChild(img)
    div.appendChild(size)
    div.appendChild(stock)
    div.appendChild(price)
    div.appendChild(button)
	document.getElementById("products").appendChild(div)

}