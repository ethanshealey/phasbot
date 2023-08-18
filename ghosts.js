import Ghosts from "./GhostClass.js"

export default (evidence, notEvidence) => {

    const ghosts = new Ghosts()

    if(!evidence?.length && !notEvidence?.length) return ghosts.all

    const possible = ghosts.all.filter((g) => {
        for(let i = 0; i < evidence.length; i++) 
            if(!g.evidence.has(evidence[i]))
                return false
        for(let i = 0; i < notEvidence.length; i++) {
            if(g.evidence.has(notEvidence[i]))
                return false
        }
        return true
    })

    return possible
}