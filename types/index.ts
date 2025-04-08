import { CurrencySchema, CryptoCurrenciesResponeSchema, CryptoCurrencySchema, CryptoPriceSchema } from "../schema/cripto-schema"
import {z} from "zod"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponeSchema>
export type Pair = z.infer<typeof CryptoCurrencySchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>