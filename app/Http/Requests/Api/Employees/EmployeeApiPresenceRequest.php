<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;
use App\Models\PaidLeave;
use App\Models\WorktimeItem;
use Illuminate\Support\Facades\Log;

class EmployeeApiPresenceRequest extends APIRequest
{

    use RuleTrait;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'id' => $this->getIdRules(),
            'type' => $this->getTypeRules(),
            'attachment' => $this->getAttachmentRules(),
            'pic' => $this->getPicRules(),
        ];

        if($this->type == 'hadir')
        {
            $rules['date'] = $this->getPresenceDateRules();
            // $rules['time'] = $this->getTimeRules();
            Log::info($this->time);
            $rules['worktime_item_id'] = $this->getWorktimeItemRules();
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);

        if($this->type == 'hadir')
        {
            $this->merge([
                'date' => date('Y-m-d'),
                'time' => date('H:i'),
            ]);
        }
    }

    function getAttachmentRules()
    {
        // if(($this->type == 'hadir' && !$this->in_location) || $this->type != 'hadir')
        // {
        //     return [
        //         'required',
        //         'file'
        //     ];
        // }

        return ['nullable','file'];
    }

    function getPicRules()
    {
        if($this->type == 'hadir')
        {
            return [
                'required',
                'file'
            ];
        }
        
        return ['nullable','file'];
    }

    function getWorktimeItemRules()
    {
        return [
            'required',
            'exists:'.WorktimeItem::class.',id'
        ];
    }

    function getTypeRules()
    {
        $types = PaidLeave::get()->pluck('name')->toArray();
        $types = array_merge($types,['hadir','tugas luar']);
        return [
            'required',
            'string',
            'in:'.implode(',',$types)
        ];
    }

    public function messages(){
        return [
            'date.unique'=>'Maaf! Sekarang Sedang Libur.'
        ];
    }
}
