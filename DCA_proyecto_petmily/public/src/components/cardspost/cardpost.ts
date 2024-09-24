enum Attribute {
    "uid" = "uid",
    "username" = "username",
    "name" = "name",
    "profileimg" = "profileimg",
    "profiledesc" = "profiledesc",
    "likes" = "likes",
    "comments" = "comments",
    "imgpost" = "imgpost"

}

class CardPost extends HTMLElement{
    uid?: number;
    username?: string;
    name?: string;
    profileimg?: string;
    profiledesc?: string;
    likes?: number;
    comments?: number;
    imgpost?: string;




    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes(){
        return Object.keys(Attribute);


    }

    attributeChangedCallback(oldValue: string | undefined, newValue: string | undefined, propName: Attribute){
        this[propName] = newValue; 
        this.render();

    }

    connectedCallback(){
        this.render()

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <article>
                <section>
                    <div>
                        <img ${this.image || "no image"}>
                    </div>
                    <div>
                        <h4>${this.name || "no name"}</h4>
                        <h5>${this.user || "no user"}</h5>
                        <p>${this.description || "no description"}</p>
                    </div>
                </section>

                <div>
                    <img ${this.post} || "no post">
                </div>
            
            </article>
            
           
            
            `
        }

    }
}
customElements.define('card-post', CardPost);
export default CardPost

