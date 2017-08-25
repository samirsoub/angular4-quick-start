import { Component, OnInit } from '@angular/core'
import { DataService } from '../services/data.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {

    name: string;
    age: number;
    address: Address;
    hobbies: string[];
    characters: Character[];

    constructor(private dataService:DataService) { }

    ngOnInit() {

        this.name       = "John Doe"
        this.age        = 30
        this.address    = {
            street: "50 main street",
            city: "Boston",
            state: "MA"
        }

        this.hobbies    = ["Write Code", "Watch Movies", "Listen to Music"]
        this.dataService.getPosts().subscribe( characters => {
            this.characters = characters.characters
        })
    }

    addHobby(hobby): boolean {
        this.hobbies.unshift(hobby)
        return false
    }

    deleteHobby(hobby): void {

        // In a real production app you'd delete by id
        for (let i = 0; i < this.hobbies.length; i++) {
           if (this.hobbies[i] === hobby) {
               this.hobbies.splice(i, 1)
           }
        }
    }
}

interface Address {

    street: string
    city: string
    state: string
}

interface Character {

    age: any
    bio: string
    birthPlace: string
    href: string
    id: number
    name: string
    novelId: any
    occupation: string
}

interface Post {

    userId: number,
    id: number,
    title: string,
    body: string
}
