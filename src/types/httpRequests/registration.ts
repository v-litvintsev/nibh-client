interface IRegistrationSuccess {
  ok: true
  message: 'User registered successfully'
}

export interface IRegistrationError {
  ok: false
  message: string
  errors: IValidationError[]
}

export type TRegistrationResponse = IRegistrationSuccess | IRegistrationError

export interface IRegistrationRequest {
  username: string
  password: string
}

interface IValidationError {
  value: string
  msg: string
  param: string
  location: string
}
