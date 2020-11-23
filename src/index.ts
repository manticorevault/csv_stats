import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// An Object that satisfies the "DataReader interface"
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass something satisfying
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// Access matchReader.matches

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
