
const getQuotes = async () => {
  const quotesArea = document.getElementById("quotes-area");
  try {
    const anime = document.getElementById("text-inp").value;
    const response = await fetch(`https://animechan.vercel.app/api/random/anime?title=${anime}`);
    if (response.status === 200) {
      const obj = await response.json();
      console.log(obj);
      const divElement = document.createElement('textarea');
      divElement.classList.add('textarea-div');
      divElement.innerText = `${obj.quote} - ${obj.character}(${obj.anime})`
      quotesArea.innerHTML = "";
      quotesArea.append(divElement);
    } else { 
      const spanElement= document.createElement('textarea');
      spanElement.classList.add('textarea-div');
      spanElement.innerText = data.message;
      spanElement.classList.add('bg-danger');
      quotesArea.innerHTML = '';
      quotesArea.append(spanElement);
    }
  } catch (err) {
    const spanElement= document.createElement('textarea');
    spanElement.classList.add('textarea-div');
    spanElement.innerText = "Something Went Wrong. Please provide correct anime name";
    spanElement.classList.add('bg-danger');
    quotesArea.innerHTML = '';
    quotesArea.append(spanElement);
  }
}
