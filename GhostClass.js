class Ghosts {

    banshee = { name: 'Banshee', evidence: new Set([ 'dots', 'ultra', 'orbs' ]) }
    demon = { name: 'Demon', evidence: new Set([ 'ultra', 'freezing', 'writing' ]) }
    deogen = { name: 'Deogen', evidence: new Set([ 'box', 'writing', 'dots' ]) }
    goryo = { name: 'Goryo', evidence: new Set([ 'dots', 'emf', 'ultra' ]) }
    hantu = { name: 'Hantu', evidence: new Set([ 'ultra', 'freezing', 'orb' ]) }
    jinn = { name: 'Jinn', evidence: new Set([ 'emf', 'ultra', 'box' ]) }
    mare = { name: 'Mare', evidence: new Set([ 'orb', 'writing', 'box' ]) }
    moroi = { name: 'Moroi', evidence: new Set([ 'box', 'writing', 'freezing' ]) }
    myling = { name: 'Myling', evidence: new Set([ 'emf', 'ultra', 'writing' ]) }
    obake = { name: 'Obake', evidence: new Set([ 'emf', 'ultra', 'orb' ]) }
    oni = { name: 'Oni', evidence: new Set([ 'dots', 'emf', 'freezing' ]) }
    onryo = { name: 'Onryo', evidence: new Set([ 'freezing', 'orb', 'box' ]) }
    phantom = { name: 'Phantom', evidence: new Set([ 'dots', 'ultra', 'box' ]) }
    poltergeist = { name: 'Poltergiest', evidence: new Set([ 'ultra', 'writing', 'box' ]) }
    raiju = { name: 'Raiju', evidence: new Set([ 'dots', 'emf', 'orb' ]) }
    revenant = { name: 'Revenant', evidence: new Set([ 'freezing', 'orb', 'writing' ]) }
    shade = { name: 'Shade', evidence: new Set([ 'emf', 'freezing', 'writing' ]) }
    spirit = { name: 'Spirit', evidence: new Set([ 'emf', 'freezing', 'writing' ]) }
    thaye = { name: 'Thaye', evidence: new Set([ 'orb', 'writing', 'dots' ]) }
    mimic = { name: 'The Mimic', evidence: new Set([ 'box', 'ultra', 'freezing' ]) }
    twins = { name: 'The Twins', evidence: new Set([ 'emf', 'freezing', 'box' ])}
    wraith = { name: 'Wraith', evidence: new Set([ 'dots', 'emf', 'box' ]) }
    yokai = { name: 'Yokai', evidence: new Set([ 'dots', 'box', 'orb' ]) }
    yurei = { name: 'Yurei', evidence: new Set([ 'orb', 'freezing', 'dots' ]) }

    all = [ 
        this.spirit, this.wraith, this.phantom, this.poltergeist, this.banshee, this.jinn, 
        this.mare, this.revenant, this.shade, this.demon, this.yurei, this.oni, this.yokai, 
        this.hantu, this.goryo, this.myling, this.onryo, this.twins, this.raiju, this.obake,
        this.mimic, this.moroi, this.deogen, this.thaye 
    ]

    constructor() {}
}

export default Ghosts