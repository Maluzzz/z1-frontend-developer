type Status = 'Empty' | 'Accepted' | 'Rejected'

export type cardId = {
  status: Status
  img: string
}

export type videoConstraint = {
  audio: boolean,
  video: {
    width: number,
    height: number,
  },

}
