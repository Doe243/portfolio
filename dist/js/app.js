/* const TypeWriter = function(txtElement, words, wait = 3000) 
{
    this.txtElement = txtElement;
    this.words      = words;
    this.txt        = '';
    this.wordIndex  = 0;
    this.wait       = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Tye Method
TypeWriter.prototype.type = function()
{
   //Current index of word
   const current = this.wordIndex % this.words.length;

   //Get full text of cuurent word
   const fullTxt = this.words[current];

  //Check if deleting
  if(this.isDeleting)
  {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }
  else
  {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element

  this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`;

  //Initial Type Speed
  let typeSpeed = 300;


  if (this.isDeleting) {
      typeSpeed /= 2;
  }

  //If word is complete

  if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.wait;

      //Set delete ti true
      this.isDeleting = true;
  }
  else if (this.isDeleting && this.txt === '') 
  {
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;
      //Pause before start typing
      typeSpeed = 500;
  }

    setTimeout(() => this.type(), typeSpeed);
} */



//E6 Class

class TypeWriter
{
    constructor(txtElement, words, wait = 3000)
    {
        this.txtElement = txtElement;
        this.words      = words;
        this.txt        = '';
        this.wordIndex  = 0;
        this.wait       = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type(){
         //Current index of word
   const current = this.wordIndex % this.words.length;

   //Get full text of cuurent word
   const fullTxt = this.words[current];

  //Check if deleting
  if(this.isDeleting)
  {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }
  else
  {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element

  this.txtElement.innerHTML= `<span class="txt">${this.txt}</span>`;

  //Initial Type Speed
  let typeSpeed = 300;


  if (this.isDeleting) {
      typeSpeed /= 2;
  }

  //If word is complete

  if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.wait;

      //Set delete ti true
      this.isDeleting = true;
  }
  else if (this.isDeleting && this.txt === '') 
  {
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;
      //Pause before start typing
      typeSpeed = 500;
  }

    setTimeout(() => this.type(), typeSpeed);
    }
}

//Init On DOM load

document.addEventListener('DOMContentLoaded', init);

//Init App

function init()
{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Int TypeWriter
    new TypeWriter(txtElement, words, wait);
}

function init2()
{
    const txtElement = document.querySelector('.txt-type2');
    const words = JSON.parse(txtElement.getAttribute('data-words2'));
    const wait = txtElement.getAttribute('data-wait2');

    //Int TypeWriter
    new TypeWriter(txtElement, words, wait);
}