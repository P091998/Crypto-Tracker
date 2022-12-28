const form=document.querySelector('#searchForm');
const xyz=document.querySelector('#xyz');
const res=document.querySelector('#tableResult');
const image=document.querySelector('#image');
const bitcoin=document.querySelector('#bitcoin');
const dogecoin=document.querySelector('#dogecoin');
const ethereum=document.querySelector('#ethereum');
const polkadot=document.querySelector('#polkadot');
const tether=document.querySelector('#tether');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const ctype=form.elements.coinType.value;
    fetchprice(ctype);
})

const fetchprice=async(ctype)=>{
    const r=await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    console.log(r);

    const name=r.data.coin.name;
    const price=r.data.coin.price;
    const volume=r.data.coin.volume;
    const change=r.data.coin.priceChange1d;
    const marketCap=r.data.coin.marketCap;

    if(xyz.value==="bitcoin")
    {
        bitcoin.style.display="block";

        dogecoin.style.display="none";
        ethereum.style.display="none";
        polkadot.style.display="none";
        tether.style.display="none";
    }
    if(xyz.value==="dogecoin")
    {
        dogecoin.style.display="block";

        bitcoin.style.display="none";
        ethereum.style.display="none";
        polkadot.style.display="none";
        tether.style.display="none";
    }
    if(xyz.value==="ethereum")
    {
        ethereum.style.display="block";

        bitcoin.style.display="none";
        dogecoin.style.display="none";
        polkadot.style.display="none";
        tether.style.display="none";
    }
    if(xyz.value==="polkadot")
    {
        polkadot.style.display="block";

        bitcoin.style.display="none";
        ethereum.style.display="none";
        dogecoin.style.display="none";
        tether.style.display="none";
    }
    if(xyz.value==="tether")
    {
        tether.style.display="block";

        bitcoin.style.display="none";
        ethereum.style.display="none";
        polkadot.style.display="none";
        dogecoin.style.display="none";
    }

    res.innerHTML=
    `<tr style="font-weight:600;">
        <td>Property</td>
        <td>Value</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>${name}</td>
    </tr>
    <tr>
        <td>Price</td>
        <td>${price}</td>
    </tr>
    <tr>
        <td>volume</td>
        <td>${volume}</td>
    </tr>
    <tr>
        <td>Change</td>
        <td>${change}</td>
    </tr>
    <tr>
        <td>Market Cap</td>
        <td>${marketCap}</td>
    </tr>`
}