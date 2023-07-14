class ButtonPawn {
    setup() {
        this.addEventListener("pointerDown", "pointerDown");
        this.setupMesh();
    }

    setupMesh() {
        [...this.shape.children].forEach((c) => this.shape.remove(c));

        let geometry = new Microverse.THREE.SphereGeometry(0.15, 16, 16);
        let material = new Microverse.THREE.MeshStandardMaterial({color: 0xcccccc, metalness: 0.8});
        let button = new Microverse.THREE.Mesh(geometry, material);
        this.shape.add(button);
    }

    pointerDown() {
        let avatar = this.getMyAvatar();
        this.publish(avatar.actor.id, "myValue", 42);
    }
}

export default {
    modules: [
        {
            name: "Button",
            pawnBehaviors: [ButtonPawn]
        }
    ]
}

/* globals Microverse */
