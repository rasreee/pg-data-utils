import concatRegExp from './_lib/concatRegExp'

export const calendarDatePattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
export const timePatternNoMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/g
export const timePatternWithMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d):(?:[012345]\d)/g

export const timestampPatternNoMs = concatRegExp(calendarDatePattern, /\s/, timePatternNoMs)
export const timestampPatternWithMs = concatRegExp(calendarDatePattern, /\s/, timePatternWithMs)
