const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.95
    const euroToday = 5.36
    const pesoChilenoToday = 0.0053
    const libraToday = 5.36
    const bitcoinToday = 5.36
    const realtoday = 1.0
    
    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/realtoday)
    }

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "peso chileno"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CL",{
            style: "currency",
            currency: "CLP"
        }).format(inputCurrencyValue/pesoChilenoToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
        }

    if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
                    style: "currency",
                    currency: "GBP"
            }).format(inputCurrencyValue/euroToday)
            }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }    
   
    if(currencySelect.value == "peso chileno"){
        currencyName.innerHTML = "Peso chileno"
        currencyImage.src = "./assets/chile.png"
    }

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)